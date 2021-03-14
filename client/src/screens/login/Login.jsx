import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/shared/layouts/Layout";
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
    <Layout>

    <div className='container'>

    <div className="background">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
      >
        <div className="input-container">
        <h3>Login</h3>
          <div className="username-container">
            
            
              <input
                placeholder="username"
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                />
            
          </div>
          <div className="password-container">
            
              <input
                placeholder="password"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                />
            
          </div>
          <Link to="/register">
            <p>Register for an account</p>
          </Link>
        </div>
        <div className="button-container">
          <button className='login-button'>Submit</button>
        </div>
      </form>
    </div>
  </div>
</Layout>
  );
};
