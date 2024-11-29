import { Router } from "express";
import userRouter from "./user";
import chatRouter from "./chat";
import messageRouter from "./message";
import llmRouter from "./llm";

const controller = Router();

controller.use("/user", userRouter);
controller.use("/chats", chatRouter);
controller.use("/message", messageRouter);
controller.use("/llm", llmRouter);

export default controller;
