import { Icon } from "../common/Icon";
import sidebarIcon from "../../assets/sidebar.svg";
import loader from "../../assets/loading.svg";
import sendIcon from "../../assets/send.svg";
import { useRecoilState, useSetRecoilState } from "recoil";
import { showSideBarState } from "../../store/behaviour";
import ReactMarkdown from "react-markdown";
import {
  chatListState,
  chatMessagesState,
  messageLoaderState,
  selectedChatState,
  userRequestState,
  assistantResponseState,
  dirStructState,
  terminalCommandsState,
} from "../../store/chats/chat";
import { useEffect } from "react";
import axios from "axios";

export const ChatContainer = () => {
  const [showSideBar, setShowSideBar] = useRecoilState(showSideBarState);
  const [selectedChat, setSelectedChat] = useRecoilState(selectedChatState);
  const [chatList, setChatList] = useRecoilState(chatListState);
  const [chatMessages, setChatMessages] = useRecoilState(chatMessagesState);
  const [userRequest, setUserRequest] = useRecoilState(userRequestState);
  const [messageLoader, setMessageLoader] = useRecoilState(messageLoaderState);
  const setAssistantResponse = useSetRecoilState(assistantResponseState);
  const setTerminalCommands = useSetRecoilState(terminalCommandsState);
  const setDirStruct = useSetRecoilState(dirStructState);

  let newChatId = "";

  async function createChat() {
    // pop up for asking chat name, if empty then random
    const chatName = prompt("Enter chat name :") || `Chat-${Math.random()}`;

    try {
      const token = localStorage.getItem("Authorization");
      const res = await axios.post(
        `http://localhost:3000/api/chats`,
        { title: chatName },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      const chat = res.data;
      if (chat) {
        setSelectedChat(chat.id);
        newChatId = chat.id;
        console.log(selectedChat);
        setChatList([...chatList, chat]);
      }
    } catch (e) {
      if (axios.isAxiosError(e) && e.response) {
        alert(e.response.data.message);
      } else {
        console.error(e);
      }
    }
    // console.log("Create Chat");
  }

  useEffect(() => {
    const messageDiv = document.querySelector("#msgDiv");
    if (messageDiv) {
      messageDiv.scrollTop = messageDiv.scrollHeight;
    }
  }, [chatMessages]);

  useEffect(() => {
    // console.log("Crayyyyy");
    async function getChatMessages() {
      // console.log("Start");
      try {
        const token = localStorage.getItem("Authorization");
        const res = await axios.get(
          `http://localhost:3000/api/chats/${selectedChat}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        // console.log("render");

        setChatMessages(res.data.messages ? res.data.messages.messages : []);
      } catch (e) {
        console.log(e);
      }
    }

    if (selectedChat !== "") {
      getChatMessages();
    }
  }, [selectedChat, setChatMessages]);

  async function submitUserRequest() {
    if (selectedChat === "") {
      await createChat();
      return;
    }
    const token = localStorage.getItem("Authorization");

    // console.log(userRequest);

    const userRequestObj = {
      role: "User",
      chatId: selectedChat,
      content: userRequest,
    };

    const newChat = [...chatMessages, userRequestObj];
    setChatMessages(newChat);
    setUserRequest("");
    let toSendChatId = "";
    if (selectedChat === "") {
      toSendChatId = newChatId;
    } else {
      toSendChatId = selectedChat;
    }
    try {
      setMessageLoader(true);
      const res = await axios.post(
        `http://localhost:3000/api/llm/send`,
        {
          userMessage: userRequestObj.content,
          chatId: toSendChatId,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setMessageLoader(false);

      const assistantMessage = res.data.assistantMessage;

      setAssistantResponse(assistantMessage);
      setDirStruct(JSON.parse(res.data.dirStruct));
      setTerminalCommands(res.data.terminalCommands);
      console.log(res.data.terminalCommands);

      const assistantResponseObj = {
        role: "Assistant",
        chatId: selectedChat,
        content: assistantMessage,
      };

      const newerChat = [...newChat, assistantResponseObj];
      setChatMessages(newerChat);
    } catch (e) {
      if (axios.isAxiosError(e) && e.response) {
        alert(e.response.data.message);
      } else {
        console.error(e);
      }
    }
    setMessageLoader(false);
  }

  return (
    <>
      <div
        className={`${showSideBar ? "col-span-6" : "col-span-8"} bg-stone-900`}
      >
        {!showSideBar ? (
          <div className="fixed p-4">
            <Icon
              height={"h-6"}
              width={"w-6"}
              src={sidebarIcon}
              onClick={() => {
                setShowSideBar((prev) => !prev);
              }}
            />
          </div>
        ) : null}
        <div className="flex flex-col justify-end pb-8 pt-4 h-full col-span-9 gap-6">
          <div
            id="msgDiv"
            className={`${showSideBar ? "max-w-10/12 w-10/12" : "max-w-8/12 w-8/12"} max-h-[73vh] mx-auto justify-end overflow-y-auto custom-scrollbar`}
          >
            {chatMessages
              ? chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex my-8 ${
                      message.role === "User" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`${
                        message.role === "User"
                          ? "bg-purple-500 text-right w-fit"
                          : "bg-stone-700"
                      } text-white p-2 rounded-2xl w-10/12  overflow-x-auto custom-scrollbar `}
                    >
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  </div>
                ))
              : null}
            {messageLoader && (
              <div className="">
                <Icon src={loader} height={"h-6"} width={"w-6"} />
              </div>
            )}
          </div>

          <div
            className={`${showSideBar ? "w-10/12" : "w-8/12"} flex flex-col justify-evenly items-center mx-auto bg-stone-800  p-2 rounded-lg min-h-32`}
          >
            <textarea
              onChange={(e) => {
                setUserRequest(e.target.value);
              }}
              className="bg-transparent flex-grow h-full w-full resize-none focus:outline-none focus:ring-0"
              placeholder="Enter Your Request"
              value={userRequest}
            />
            <div className="self-end flex justify-between items-center w-full">
              <p className="text-codecon-primary">Ask CodeCon</p>
              <Icon
                height={"h-8"}
                width={"w-8"}
                onClick={submitUserRequest}
                src={sendIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
