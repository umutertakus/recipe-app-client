import Form from "./Form";

const Login = ({ userInfo, setUserInfo, setIsLoginPage }) => {
  return (
    <Form
      userInfo={userInfo}
      setUserInfo={setUserInfo}
      label="Login"
      setIsLoginPage={setIsLoginPage}
    />
  );
};

export default Login;
