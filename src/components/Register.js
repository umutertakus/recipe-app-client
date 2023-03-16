import Form from "./Form";

const Register = ({ userInfo, setUserInfo, setIsLoginPage, onSubmit }) => {
  return (
    <Form
      userInfo={userInfo}
      setUserInfo={setUserInfo}
      label="Register"
      setIsLoginPage={setIsLoginPage}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
