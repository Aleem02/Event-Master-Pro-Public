import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../Config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(() =>
        navigate("/login")
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h1>Register</h1>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
