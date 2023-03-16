import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [isLoginPage, setIsLoginPage] = useState(false);

  const loginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3300/auth/login",
        userInfo
      );
      const { token, userId } = response.data;
      setCookies("access_token", token);
      localStorage.setItem("userId", userId);
      alert("Login successful.");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const registerSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3300/auth/register", userInfo);
      alert("Registration completed. You must login.");
      setIsLoginPage(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth">
      {isLoginPage ? (
        <Login
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setIsLoginPage={setIsLoginPage}
          onSubmit={loginSubmit}
        />
      ) : (
        <Register
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setIsLoginPage={setIsLoginPage}
          onSubmit={registerSubmit}
        />
      )}
    </div>
  );
};

export default Auth;
