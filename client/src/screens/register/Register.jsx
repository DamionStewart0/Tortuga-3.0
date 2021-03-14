import React from "react";
import { useState } from "react";
import { Layout } from "../../components/shared/layouts/Layout";
import "./Register.css";

export const Register = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

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

    <div className='background'>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
      >
      <div className="username input-container">
        <h3>Register</h3>
        
          <input
          placeholder="username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          />
        
      </div>
      <div className="email input-container">
        
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            />
        
      </div>
      <div className="password input-container">
        
          <input
            placeholder="Enter password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            />
        
      </div>
      <div className="button-container">
        <button className="register-button">Register</button>
      </div>
    </form>
    </div>
            </div>
            </Layout>
  );
};
