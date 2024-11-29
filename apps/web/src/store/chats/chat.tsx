import { atom } from "recoil";

interface chatListType {
  id: string;
  title: string;
}

interface chatMessageList {
  role: string;
  content: string;
  chatId: string;
}

export const selectedChatState = atom({
  key: "selectedChatState",
  default: "",
});

export const chatListState = atom<chatListType[]>({
  key: "chatListState",
  default: [],
});

export const chatMessagesState = atom<chatMessageList[]>({
  key: "chatMessagesState",
  default: [],
});

export const userRequestState = atom<string>({
  key: "userRequestState",
  default: "",
});

export const messageLoaderState = atom<boolean>({
  key: "messageLoaderState",
  default: false,
});

export const assistantResponseState = atom<string>({
  key: "assistantResponseState",
  default: "",
});

export const dirStructState = atom<string>({
  key: "dirStructState",
  default: "",
});

export const terminalCommandsState = atom<string>({
  key: "terminalCommandsState",
  default: "",
});
