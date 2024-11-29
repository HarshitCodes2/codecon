import { GoogleGenerativeAI } from "@google/generative-ai";
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY!);

export const modelJson = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
  },
});

export const modelText = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    responseMimeType: "text/plain",
  },
});
