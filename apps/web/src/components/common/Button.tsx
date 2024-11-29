import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
};

export const PrimaryButton = ({ onClick, children }: ButtonProps) => {
  return (
    <>
      <button
        className="w-full min-w-fit flex-grow border-0 bg-purple-700 text-white border-rounded py-2 px-2 text-md rounded-lg hover:shadow-purple-700 hover:shadow-2xl  hover:-translate-y-0.5 transition-all duration-50"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export const SecondaryButton = ({ onClick, children }: ButtonProps) => {
  return (
    <>
      <button
        className="z-40 w-full min-w-fit border border-purple-400 py-1 px-2 text-md text-purple-400 rounded-lg hover:-translate-y-0.5 transition-all duration-50"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export const GhostButton = ({ onClick, children }: ButtonProps) => {
  return (
    <>
      <button className="text-purple-400 underline" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export const LogOutButton = ({ onClick, children }: ButtonProps) => {
  return (
    <>
      <button
        className="border rounded-lg flex gap-1 py-1 px-2 text-stone-400 border-codecon-highlight hover:-translate-y-0.5 transition-all duration-50"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
