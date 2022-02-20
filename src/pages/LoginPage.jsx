import React, { useState } from "react";
import { getUserStatus } from "../services/database/functions";
import { useNavigate } from "react-router-dom";

import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const validateEntries = (email, phone) => {
    if (email === "") {
      setLoginError("Enter email");
      return false;
    } else {
      setLoginError("");
      return true;
    }
  };

  const login = async (email) => {
    // wait until the promise returns us a value
    if (validateEntries(email)) {
      try {
        const res = await getUserStatus(email);
        console.log(res);

        if (res == 1) {
          sessionStorage.setItem("logged", 1);
          navigate("/stream");
        } else {
          setLoginError("Opps, you have no access to this event ^_^");
        }
      } catch (err) {
        console.log(err);
        setLoginError("Opps, error ^_^");
      }
    }
    // "Now it's done!"
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center" }}>
      <div className="login-box">
        <h1>Login</h1>
        <input
          className="input-field-login"
          placeholder="Email"
          type="text"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="input-field-login"
          placeholder="Phone number"
          type="text"
          name="phoneNumber"
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <button className="button-login" onClick={() => login(email)}>
          Login
        </button>
        <p>{loginError}</p>
      </div>
    </div>
  );
};

export default LoginPage;
