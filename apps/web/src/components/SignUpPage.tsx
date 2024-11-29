import { useRecoilState } from "recoil";
import { InputDiv } from "./common/InputDiv";
import { emailState, nameState, passwordState } from "../store/signup/signup";
import { GhostButton, PrimaryButton } from "./common/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavBarSign } from "./common/NavBar";
import { useEffect } from "react";
import loadingIndicator from "../assets/loading.svg";
import { loadingSignState } from "../store/behaviour";
// import dotenv from 'dotenv'
// dotenv.config()

export const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useRecoilState(nameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [loadingSign, setLoadingSign] = useRecoilState(loadingSignState);

  useEffect(() => {
    const auth = localStorage.getItem("Authorization");
    if (auth) {
      navigate("/chat");
    }
  }, [navigate]);

  return (
    <>
      <div className="min-h-screen min-w-screen bg-codecon-background text-white flex flex-col">
        <NavBarSign />
        <div className="flex justify-center items-center flex-grow">
          <div className="flex flex-col gap-4 transform -translate-y-20 sm:min-w-80 w-56">
            <h1 className="text-4xl mb-2">
              Sign Up{" "}
              <span className="sm:inline-block block blur-xl text-purple-300 hover:blur-0 transition-all duration-300 cursor-default">
                {" "}
                to a dream
              </span>
            </h1>
            <InputDiv
              className="bg-transparent border border-gray-300 rounded p-2 w-full"
              placeholder="Name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target!.value);
              }}
            />
            <InputDiv
              className="bg-transparent border border-gray-300 rounded p-2 w-full"
              placeholder="Email"
              type="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target!.value);
              }}
            />
            <InputDiv
              className="bg-transparent border border-gray-300 rounded p-2 w-full"
              placeholder="Password"
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target!.value);
              }}
            />
            <div className="flex flex-col gap-4">
              <PrimaryButton
                onClick={async () => {
                  try {
                    setLoadingSign(true);
                    const res = await axios.post(
                      `http://localhost:3000/api/user/signup`,
                      {
                        name: name,
                        email: email,
                        password: password,
                      }
                    );

                    const token = res.data.token;
                    localStorage.setItem("Authorization", `Bearer ${token}`);
                    setLoadingSign(false);
                    navigate("/chat");
                  } catch (e) {
                    setLoadingSign(false);
                    alert(e.response.data.message);
                    // console.log(e);
                  }
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  Sign Up{" "}
                  {loadingSign ? (
                    <img className="h-6" src={loadingIndicator} alt="" />
                  ) : null}
                </div>
              </PrimaryButton>
              <p className="font-light text-gray-300">
                Already have an account?{" "}
                <GhostButton
                  onClick={() => {
                    navigate("/signin");
                  }}
                >
                  Sign in.
                </GhostButton>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
