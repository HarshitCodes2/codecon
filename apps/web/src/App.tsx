import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { SignUpPage } from "./components/SignUpPage";
import { SignInPage } from "./components/SignInpage";
import { NotFoundPage } from "./components/404page";
import { ChatPage } from "./components/ChatPage";
// import { TestContainer } from "./components/test";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/chat" element={<ChatPage />} />
          {/* <Route path="/test" element={<TestContainer />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
