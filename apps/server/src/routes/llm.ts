import { Router } from "express";
import client from "@repo/db/client";
import { userAuth } from "../middleware/userAuth";
import { SendLLMSchema } from "../types";
import { firstTimeLLMComms, getLLMResponse } from "../llmComms";

const llmRouter = Router();

llmRouter.use(userAuth);

llmRouter.post("/send", async (req, res) => {
  const parsedData = SendLLMSchema.safeParse(req.body);

  if (!parsedData.success) {
    res.status(400).json({
      message: "Input Validation Error",
      error: parsedData.error.issues[0].message,
    });
    return;
  }

  const userMessageAdded = await client.message.create({
    data: {
      role: "User",
      content: parsedData.data.userMessage,
      chatId: parsedData.data.chatId,
    },
  });

  // console.log("userMessageAdded");
  // console.log(userMessageAdded);

  const chat = await client.chat.findUnique({
    where: {
      id: parsedData.data.chatId,
    },
  });

  await firstTimeLLMComms(parsedData.data.chatId, parsedData.data.userMessage);

  const llmRespone = await getLLMResponse(
    parsedData.data.chatId,
    parsedData.data.userMessage
  );

  if (!llmRespone) {
    res.status(500).json({
      message: "Failed to communicate with LLM",
    });
    return;
  }

  const assistantMessageAdded = await client.message.create({
    data: {
      role: "Assistant",
      content: llmRespone.modelCodeResponseText,
      chatId: parsedData.data.chatId,
    },
  });

  // console.log("assistantMessageAdded");
  // console.log(assistantMessageAdded);

  res.json({
    techStack: llmRespone.techStack,
    dirStruct: llmRespone.dirStruct,
    assistantMessage: llmRespone.modelCodeResponseText,
    terminalCommands: llmRespone.terminalCommandsText,
  });
});

export default llmRouter;
