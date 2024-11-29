import { ParseStatus, z } from "zod";

export const UserSignUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must of length 6"),
});

export const UserSignInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be of length 6"),
});

export const CreateChatSchema = z.object({
  title: z.string().min(1, "Title must of at least length 1"),
});

export const AddMessageSchema = z.object({
  chatId: z.string(),
  role: z.string(),
  content: z.string(),
});

export const SendLLMSchema = z.object({
  chatId: z.string(),
  userMessage: z.string(),
});

declare global {
  namespace Express {
    export interface Request {
      userId?: string;
    }
  }
}
