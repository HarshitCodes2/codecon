import { Router } from "express";
import { AddMessageSchema } from "../types";
import client from "@repo/db/client";
import { userAuth } from "../middleware/userAuth";

const messageRouter = Router();
messageRouter.use(userAuth);

messageRouter.post("/", async (req, res) => {
  const parsedData = AddMessageSchema.safeParse(req.body);

  if (!parsedData.success) {
    res.status(400).json({
      message: "Input Validation Error",
      error: parsedData.error.issues[0].message,
    });
    return;
  }

  const message = await client.message.create({
    data: {
      chatId: parsedData.data.chatId,
      content: parsedData.data.content,
      role: parsedData.data.role === "user" ? "User" : "Assistant",
    },
  });

  // console.log("Messages :");
  // console.log(message);

  if (!message) {
    res.status(500).json({
      message: "DataBase cannot create message",
    });
    return;
  }

  res.json({
    role: message.role,
    content: message.content,
    chatId: message.chatId,
  });
  return;
});

messageRouter.get("/:chatId", async (req, res) => {
  const chatId = req.params.chatId;
  // console.log(chatId);

  const messages = await client.message.findMany({
    where: {
      chatId: chatId,
    },
    select: {
      role: true,
      content: true,
      chatId: true,
    },
  });

  // console.log("Messages :");
  // console.log(messages);

  res.json({
    messages: messages,
  });
  return;
});

export default messageRouter;
