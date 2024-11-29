import { NavBarSign } from "./common/NavBar";

export const NotFoundPage = () => {
  return (
    <>
      <div>
        <div className="bg-codecon-background min-h-screen h-full min-w-screen flex flex-col relative overflow-hidden">
        <div className="opacity-20 top-96 left-10 rotate-45 fixed h-28 w-[150vh] bg-gradient-to-r blur-2xl from-gray-300 via-purple-400 to-purple-600"></div>
          <NavBarSign />
          <div className="flex flex-col pt-64 transform -translate-y-10 items-center flex-grow">
            <h1 className="text-6xl text-codecon-heading">
              404 Page Not Found
            </h1>
            <p className="text-codecon-text blur-sm hover:blur-0 transition-all duration-300 cursor-default pt-4 pb-16">
              Maybe you typed in the wrong url
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
