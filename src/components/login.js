import React from "react";
import "../App.css";

export const Login = ({ props }) => {
  const getDetails = () => {
    let e = document.getElementById("email").value;
    let p = document.getElementById("password").value;
    props.getLogin(e, p);
  };
  return (
    <div className="login-container">
      <div className="left-bar">
        <div className="login-text-header">
          <h1>Welcome</h1>
          <p>Please enter your details below</p>
        </div>
        <div className="login-input">
          <label>Username</label>
          <input id="email" type="text" placeholder="Enter your email"></input>
        </div>
        <div className="login-input">
          <label>Password</label>
          <input id="password" type="password" placeholder="Password"></input>
        </div>

        <div className="btn-login-container">
          <div onClick={() => getDetails()} className="btn-login">
            <h2>Log In</h2>
          </div>
          <p>Dont have an account? Sign up here</p>
        </div>
      </div>
      <div className="right-bar"></div>
    </div>
  );
};
