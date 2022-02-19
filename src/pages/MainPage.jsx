import React, { useState } from "react";
import {
  addUserToEvent,
  addUser,
  setUserStatus,
} from "../services/database/functions";

const MainPage = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
        onClick={() => {
          addUserToEvent(email, phoneNumber);
          addUser(email, phoneNumber);
        }}
      >
        Buy
      </button>
    </div>
  );
};

export default MainPage;
