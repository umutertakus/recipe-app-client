import React from "react";

const Form = ({ userInfo, setUserInfo, label, onSubmit, setIsLoginPage }) => {
  const handleUserInfoChange = (event) => {
    const { id: name, value } = event.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const switchPage = () => {
    setUserInfo({ username: "", password: "" });
    const value = label === "Login" ? false : true;
    setIsLoginPage(value);
  };

  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <h2>{label}</h2>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={userInfo.username}
            onChange={handleUserInfoChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={userInfo.password}
            onChange={handleUserInfoChange}
          />
        </div>
        <button type="submit">{label}</button>
        <button onClick={switchPage}>
          {label === "Login"
            ? "Don't you have an account?"
            : "Do you have an account?"}
        </button>
      </form>
    </div>
  );
};

export default Form;
