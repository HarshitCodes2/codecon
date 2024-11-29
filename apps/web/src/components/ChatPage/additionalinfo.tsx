import { useRecoilState, useRecoilValue } from "recoil";
import { showSideBarState } from "../../store/behaviour";
import ReactMarkdown from "react-markdown";
import {
  dirStructState,
  selectedChatState,
  terminalCommandsState,
} from "../../store/chats/chat";
import { useEffect } from "react";
import axios, { isAxiosError } from "axios";

export const AdditionalInfo = () => {
  const showSideBar = useRecoilValue(showSideBarState);
  const selectedChat = useRecoilValue(selectedChatState);
  const [dirStruct, setDirStruct] = useRecoilState(dirStructState);
  const terminalCommands = useRecoilValue(terminalCommandsState);

  useEffect(() => {
    async function getChatDir() {
      const token = localStorage.getItem("Authorization");
      try {
        const res = await axios.get(
          `http://localhost:3000/api/chats/${selectedChat}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        // console.log(res.data.messages.techStackSetup);
        setDirStruct(JSON.parse(res.data.messages.techStackSetup));
      } catch (e) {
        if (isAxiosError(e)) {
          if (e.response) {
            alert(e.response.data.message);
          }
        } else {
          console.log(e);
        }
      }
    }

    getChatDir();
  }, [selectedChat, setDirStruct]);

  return (
    <>
      <div
        className={`${showSideBar ? "col-span-2" : "col-span-2"} bg-stone-900 pt-4 pb-8 flex flex-col`}
      >
        <div className="max-h-96 min-h-96 overflow-auto custom-scrollbar">
          <p className="text-lg text-gray-400">Directory:</p>
          <pre className="text-xs whitespace-pre-wrap overflow-auto">
            {JSON.stringify(dirStruct, null, 3)}
          </pre>
        </div>
        <div className="max-h-96 min-h-96 overflow-auto custom-scrollbar">
          <p className="text-lg text-gray-400">Commands:</p>
          <pre className="text-xs whitespace-pre-wrap overflow-auto custom-scrollbar">
            <ReactMarkdown>{terminalCommands}</ReactMarkdown>
          </pre>
        </div>
        {/* App directory structure */}
        {/* Terminal Commands to run */}
      </div>
    </>
  );
};
