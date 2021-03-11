import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export const Login = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="background">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
        <div className="input-container">
          <div className="username-container">
            <h3>Login</h3>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="password-container">
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </label>
          </div>
          <Link to="/register">
            <p>Register for an account</p>
          </Link>
        </div>
        <div className="button-container">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
