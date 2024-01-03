// Login.js
import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <>
      {/* <!-- Page Header Start --> */}
      <div className="container-fluid bg-dark bg-img p-5 mb-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 text-uppercase text-white">Login</h1>
            <Link to="/">Home</Link>
            <i className="far fa-square text-primary px-2"></i>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}
      <div className="loginPage">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="login-heading">Login</h2>
          <input
            type="text"
            className="username-input"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            className="password-input"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="form-options">
            <div className="remember_me">
              <input
                type="checkbox"
                id="rememberMe"
                className="remember_me_checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="rememberMe" className="remember_me-label">
                Remember Me
              </label>
            </div>
            <Link to="/forgot-password" className="forgot_password_link">
              Forgot Password?
            </Link>
          </div>
          <button type="submit" className="login_button">
            Login
          </button>
          <div className="not_a_member">
            Not a member?
            <Link to="/registration" className="register_link">
              Register here
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
