import { useNavigate } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "./Button";

export const NavBarHome = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between p-4 items-center h-20">
        <p
          className="text-2xl hover:cursor-pointer font-bold text-gray-300"
          onClick={() => {
            navigate("/");
          }}
        >
          CodeCon
        </p>
        <div className="flex gap-2 text-white">
          <SecondaryButton
            onClick={() => {
              navigate("/signin");
            }}
          >
            Sign In
          </SecondaryButton>
          <PrimaryButton
            onClick={() => {
              navigate("/signup");
            }}
          >
            Get Started
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};

export const NavBarSign = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between p-4 items-center h-20">
      <p
        className="text-2xl hover:cursor-pointer font-bold text-gray-300"
        onClick={() => {
          navigate("/");
        }}
      >
        CodeCon
      </p>
    </div>
  );
};

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between p-2 items-center h-14">
      <p
        className="text-2xl hover:cursor-pointer font-bold text-gray-300"
        onClick={() => {
          navigate("/");
        }}
      >
        CodeCon
      </p>
      <div>
        <SecondaryButton
          onClick={() => {
            localStorage.removeItem("Authorization");
            navigate("/");
          }}
        >
          Sign Out
        </SecondaryButton>
      </div>
    </div>
  );
};
