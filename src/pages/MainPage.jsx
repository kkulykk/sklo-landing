import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  addUserToEvent,
  addUser,
  setUserStatus,
  getUserStatus
} from "../services/database/functions";


const MainPage = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const moveToPayment = (email, phoneNumber) => {
    addUser(email, phoneNumber);
    addUserToEvent(email, phoneNumber);
    navigate(`/${email}/payment`)
  }

  return (
    <div>
      MainPage
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
      <button
        onClick={() =>  moveToPayment(email, phoneNumber)}
      >
        Buy
      </button>
    </div>
  );
};

export default MainPage;
