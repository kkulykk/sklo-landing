import React, { useState } from "react";
import { getUserStatus } from "../services/database/functions";
import { useNavigate } from 'react-router-dom';

import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();


  const login = async (email) => {
    // wait until the promise returns us a value
    try {
      const res = await getUserStatus(email);
      console.log(res);

      if (res == 1) {
        sessionStorage.setItem("loggged", 1);
        navigate('/stream')
      } else {
        setLoginError("Opps, you have no access to this event ^_^");
      }
    } catch (err) {
      console.log(err);
      setLoginError("Opps, error ^_^");
    }

    // "Now it's done!"
  };

  return (
    <div>
      LoginPage
      <br />
      <input
        type="text"
        name="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <input
        type="text"
        name="phoneNumber"
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <br />
      <button onClick={() => login(email)}>Login</button>
      <p>{loginError}</p>
    </div>
  );
};

export default LoginPage;
