import Form from "./Form";

const Register = ({ userInfo, setUserInfo, setIsLoginPage }) => {
  return (
    <Form
      userInfo={userInfo}
      setUserInfo={setUserInfo}
      label="Register"
      setIsLoginPage={setIsLoginPage}
    />
  );
};

export default Register;
