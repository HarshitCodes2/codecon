import { NavBarHome } from "./common/NavBar";
import appSS2 from "../assets/app_ss_2.png";

export const HomePage = () => {
  return (
    <>
      <div className="bg-codecon-background min-h-screen h-full min-w-screen flex flex-col relative overflow-hidden">
        <div className="opacity-20 top-[40vh] left-[5vw] rotate-45 fixed h-28 w-[150vh] bg-gradient-to-r blur-2xl from-gray-300 via-purple-400 to-purple-600"></div>
        <NavBarHome />
        <div className="flex flex-col pt-52 items-center flex-grow">
          <h1 className="text-6xl text-codecon-heading">
            Code Snippets at your fingertips
          </h1>
          <p className="text-codecon-text blur-sm hover:blur-0 transition-all duration-300 cursor-default pt-4 pb-16">
            Try pre prompted AI, that handles all the nity grity, Let's you
            build more in less words
          </p>
          <div className="mt-[5vw]">
            <img src={appSS2} className="max-w-screen-lg rounded shadow-md " />
          </div>
          <div className="h-12 w-full text-gray-300 items-end self-end text-start mt-12">
            <p>Built by HarshitCodes2</p>
          </div>
        </div>
      </div>
    </>
  );
};
