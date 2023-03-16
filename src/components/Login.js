import Form from "./Form";

const Login = ({ userInfo, setUserInfo, setIsLoginPage, onSubmit }) => {
  return (
    <Form
      userInfo={userInfo}
      setUserInfo={setUserInfo}
      label="Login"
      setIsLoginPage={setIsLoginPage}
      onSubmit={onSubmit}
    />
  );
};

export default Login;
