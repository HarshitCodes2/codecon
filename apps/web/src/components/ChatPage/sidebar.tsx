import { Icon } from "../common/Icon";
import sidebarIcon from "../../assets/sidebar.svg";
import newchatIcon from "../../assets/newchat.svg";
import logoutIcon from "../../assets/logout.svg";
import { useRecoilState } from "recoil";
import { showSideBarState } from "../../store/behaviour";
import { useNavigate } from "react-router-dom";
import { LogOutButton } from "../common/Button";
import axios from "axios";
import { chatListState, selectedChatState } from "../../store/chats/chat";
import { useEffect } from "react";

export const SideBar = () => {
  const navigate = useNavigate();
  const [showSideBar, setShowSideBar] = useRecoilState(showSideBarState);
  const [chatList, setChatList] = useRecoilState(chatListState);
  const [selectedChat, setSelectedChat] = useRecoilState(selectedChatState);

  useEffect(() => {
    async function getChats() {
      try {
        const token = localStorage.getItem("Authorization");
        const res = await axios.get(`http://localhost:3000/api/chats`, {
          headers: {
            Authorization: `${token}`,
          },
        });

        // console.log(res.data.chats);
        setChatList(res.data.chats);
      } catch (e) {
        console.log(e);
      }
    }
    getChats();
  }, [setChatList]);

  async function createChat() {
    // pop up for asking chat name, if empty then random
    const chatName = prompt("Enter chat name:") || `Chat-${Math.random()}`;

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
      const chat = {
        id: res.data.id,
        title: res.data.title,
      };
      // console.log(chat);

      if (chat) {
        setSelectedChat(chat.id);
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

  return (
    <>
      <div
        className={`${showSideBar ? "col-span-2" : "col-span-0 hidden"} h-full`}
      >
        {showSideBar ? (
          <div className="w-full h-full px-3 py-4 pb-8 flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-4 flex-1 min-h-0">
              <div className="flex w-full justify-between items-center">
                <p
                  className="text-2xl hover:cursor-pointer font-bold text-gray-300"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  CodeCon
                </p>
                <Icon
                  height={"h-6"}
                  width={"w-6"}
                  src={sidebarIcon}
                  onClick={() => {
                    setShowSideBar((prev) => !prev);
                  }}
                />
              </div>
              <div className="flex-1 overflow-hidden flex flex-col p-2">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-300 font-light">Chats</p>
                  <Icon
                    height={"h-6"}
                    width={"w-6"}
                    src={newchatIcon}
                    onClick={() => {
                      createChat();
                    }}
                  />
                </div>
                <div
                  id="scroll-div"
                  className="flex-1 max-h-[70vh] overflow-y-auto pr-2 space-y-2 custom-scrollbar"
                >
                  {chatList.map((chat) => (
                    <div
                      key={chat.id}
                      className={`p-2 rounded-lg cursor-pointer font-light ${
                        chat.id === selectedChat
                          ? "bg-stone-800"
                          : "hover:bg-stone-800"
                      }`}
                      onClick={() => setSelectedChat(chat.id)}
                    >
                      <p className="text-gray-300">{chat.title}</p>
                    </div>
                  ))}
                  {/* Will fill all the chat names here */}
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="">
                <LogOutButton
                  onClick={() => {
                    localStorage.removeItem("Authorization");
                    navigate("/");
                  }}
                >
                  <Icon
                    height={"h-6"}
                    width={"w-6"}
                    src={logoutIcon}
                    onClick={() => {}}
                  />
                  <p>Log Out</p>
                </LogOutButton>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
