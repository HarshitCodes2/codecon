import { SideBar } from "./ChatPage/sidebar";
import { ChatContainer } from "./ChatPage/chatcontainer";
import { AdditionalInfo } from "./ChatPage/additionalinfo";

export const ChatPage = () => {
  return (
    <>
      <div className="grid grid-cols-10 h-screen relative overflow-hidden bg-codecon-background text-white">
        <SideBar />
        <ChatContainer />
        <AdditionalInfo />
      </div>
    </>
  );
};
