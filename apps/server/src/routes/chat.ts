import { Router } from "express";
import { userAuth } from "../middleware/userAuth";
import { CreateChatSchema } from "../types";
import client from "@repo/db/client";

const chatRouter = Router();

chatRouter.use(userAuth);

chatRouter.post("/", async (req, res) => {
  const parsedData = CreateChatSchema.safeParse(req.body);

  if (!parsedData.success) {
    res.status(400).json({
      message: "Input Validation Error",
      error: parsedData.error.issues[0].message,
    });
    return;
  }

  const chat = await client.chat.create({
    data: {
      title: parsedData.data.title,
      userId: req.userId!,
    },
  });

  if (!chat) {
    res.status(500).json({
      message: "Something wrong with the DataBase, cannot connect",
    });
    return;
  }

  res.json({
    id: chat.id,
    title: chat.title,
  });
});

chatRouter.get("/", async (req, res) => {
  const chats = await client.chat.findMany({
    where: {
      userId: req.userId,
    },
    select: {
      id: true,
      title: true,
    },
  });

  res.json({
    chats: chats,
  });
});

chatRouter.get("/:chatId", async (req, res) => {
  const chatId = req.params.chatId;
  const chatMessages = await client.chat.findUnique({
    where: {
      id: chatId,
    },
    select: {
      messages: true,
      techStackSetup: true,
    },
  });

  res.json({
    messages: chatMessages,
  });
});

export default chatRouter;
