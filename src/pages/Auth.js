import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const Auth = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [isLoginPage, setIsLoginPage] = useState(false);

  return (
    <div className="auth">
      {isLoginPage ? (
        <Login
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setIsLoginPage={setIsLoginPage}
        />
      ) : (
        <Register
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setIsLoginPage={setIsLoginPage}
        />
      )}
    </div>
  );
};

export default Auth;
