import { modelJson, modelText } from "./setup";
import {
  SYSTEM_PROMPT,
  TECH_STACK_PROMPT_GENERATOR,
  TECH_STACK_SETUP_PROMPT_GENERATOR,
  LLM_OUTPUT_PROMPT_GENERATOR,
  TERMINAL_COMMANDS_PROMPT_GENERATOR,
} from "./prompts";
import client from "@repo/db/client";

export const firstTimeLLMComms = async (
  chatId: string,
  userRequest: string
) => {
  await modelJson.generateContent(SYSTEM_PROMPT);

  const TECH_STACK_PROMPT = TECH_STACK_PROMPT_GENERATOR(userRequest);

  const techStackOp = await modelJson.generateContent(TECH_STACK_PROMPT);

  const techStack = techStackOp.response.text();

  // console.log("techStacktechStacktechStacktechStacktechStacktechStacktechStacktechStacktechStacktechStacktechStacktechStack");
  // console.log(techStack);

  const DIRECTORY_STRUCTURE_PROMPT =
    TECH_STACK_SETUP_PROMPT_GENERATOR(techStack);

  const dirStructOP = await modelJson.generateContent(
    DIRECTORY_STRUCTURE_PROMPT
  );

  const dirStruct = dirStructOP.response.text();

  // console.log(dirStruct);

  await client.chat.update({
    where: {
      id: chatId,
    },
    data: {
      techStack: techStack,
      techStackSetup: dirStruct,
    },
  });
};

export const getLLMResponse = async (chatId: string, userRequest: string) => {
  const techInfoJson = await client.chat.findUnique({
    where: {
      id: chatId,
    },
    select: {
      techStack: true,
      techStackSetup: true,
    },
  });

  const messages = await client.message.findMany({
    where: {
      chatId: chatId,
    },
  });

  // console.log(messages);

  const relevantHistory = messages
    .filter(
      (message) => message.role === "User" || message.role === "Assistant"
    )
    .map((message, index, array) => {
      if (message.role === "Assistant" && index !== array.length - 2) {
        return null;
      }
      return message;
    })
    .filter((message) => message !== null);

  // console.log("relevantHistory");
  // console.log(relevantHistory);

  if (!techInfoJson!.techStack || !techInfoJson!.techStackSetup) {
    await firstTimeLLMComms(chatId, userRequest);
  }

  const techStack = techInfoJson!.techStack;
  const dirStruct = techInfoJson!.techStackSetup;

  const LLM_OUTPUT_PROMPT = LLM_OUTPUT_PROMPT_GENERATOR(
    userRequest,
    techStack,
    dirStruct,
    relevantHistory
  );

  const modelCodeResponse = await modelText.generateContent(LLM_OUTPUT_PROMPT);

  const modelCodeResponseText = modelCodeResponse.response.text();

  const TERMINAL_COMMANDS_PROMPT = TERMINAL_COMMANDS_PROMPT_GENERATOR(
    modelCodeResponseText,
    dirStruct
  );

  const terminalCommands = await modelText.generateContent(
    TERMINAL_COMMANDS_PROMPT
  );

  const terminalCommandsText = terminalCommands.response.text();

  // console.log(modelCodeResponseText);

  return {
    techStack: techStack,
    dirStruct: dirStruct,
    modelCodeResponseText: modelCodeResponseText,
    terminalCommandsText: terminalCommandsText,
  };
};
