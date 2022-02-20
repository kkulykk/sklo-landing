import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addUserToEvent,
  addUser,
  setUserStatus,
  getUserStatus,
} from "../services/database/functions";
import ScheduleItem from "../components/ScheduleItem";
import "./MainPage.css";

const MainPage = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inputFieldsError, setInputFieldsError] = useState("");
  const navigate = useNavigate();

  const validateEntries = (email, phone) => {
    if (email === "" && phone === "") {
      setInputFieldsError("Enter email and phone number");
      return false;
    } else if (email === "") {
      setInputFieldsError("Enter email");
      return false;
    } else if (phone === "") {
      setInputFieldsError("Enter phone");
      return false;
    } else {
      setInputFieldsError("");
      return true;
    }
  };

  const moveToPayment = async (email, phoneNumber) => {
    if (validateEntries(email, phoneNumber)) {
      try {
        const res = await getUserStatus(email);
        if (res === 1) {
          navigate(`/login`);
        } else {
          addUser(email, phoneNumber);
          addUserToEvent(email, phoneNumber);
          navigate(`/${email}/payment`);
        }
      } catch (err) {
        console.log();
        setInputFieldsError("The purchase cannot be proceeded");
      }
    }
  };

  return (
    <div>
      <header>
        <p style={{ fontWeight: "bold" }}>SKLO Event</p>
        <div className="navigation-items">
          <a href="#about" className="navigation-item-secondary">
            About
          </a>
          <a href="#speaker" className="navigation-item-secondary">
            Speaker
          </a>
          <a href="#schedule" className="navigation-item-secondary">
            Schedule
          </a>
          <a href="#register" className="navigation-item-primary">
            Register
          </a>
        </div>
      </header>
      <div className="main-content">
        <div className="screen-1">
          <p>01 / 03 / 2022</p>
          <h1 className="screen-1-title">
            Big Event Title and some additional info for users
          </h1>
          <div className="screen-1-buttons">
            <a href="#register">
              <button className="screen-1-cta">Register now</button>
            </a>
            <a href="#about">
              <button className="screen-1-cta">Find more</button>
            </a>
          </div>
        </div>
        <div id="about">
          <div className="header-holder"></div>
          <div className="screen-3-container">
            <div className="big-photo">
              <img
                className="big-photo"
                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="Speaker"
              />
            </div>
            <div className="screen-3-text-content">
              <h2 className="subscreens-title">About the event</h2>
              <p className="speaker-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                veritatis optio. Dolorem maiores expedita at impedit, voluptate
                ea, deserunt nisi ad rerum esse placeat iste similique
                doloremque. Praesentium, natus enim! Dolorem maiores expedita at
                impedit, voluptate ea, deserunt nisi ad rerum esse placeat iste
                similique doloremque. Praesentium, natus enim!
              </p>
            </div>
          </div>
        </div>
        <div id="speaker">
          <div className="header-holder"></div>
          <div className="screen-3-container">
            <div className="screen-3-text-content">
              <h2 className="subscreens-title">About the speaker</h2>
              <p className="speaker-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                veritatis optio. Dolorem maiores expedita at impedit, voluptate
                ea, deserunt nisi ad rerum esse placeat iste similique
                doloremque. Praesentium, natus enim! Dolorem maiores expedita at
                impedit, voluptate ea, deserunt nisi ad rerum esse placeat iste
                similique doloremque. Praesentium, natus enim!
              </p>
            </div>
            <div className="big-photo">
              <img
                className="big-photo"
                src="https://www.presentation-guru.com/wp-content/uploads/2019/03/silent-speaker.jpg"
                alt="Speaker"
              />
            </div>
          </div>
        </div>
        <div id="schedule">
          <div className="header-holder"></div>
          <div className="screen-4-container">
            <h2 className="subscreens-title">Shedule</h2>
            <p className="schedule-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              veritatis optio. Dolorem maiores expedita at impedit, voluptate
              ea, deserunt nisi ad rerum esse placeat iste similique doloremque.
              Praesentium, natus enim!
            </p>
            <div className="schedule-items">
              <ScheduleItem
                time="10:00"
                desc="Consectetur adipisicing elit"
                duration="45 min"
              />
              <ScheduleItem time="10:45" desc="Break" duration="15 min" />
              <ScheduleItem
                time="11:00"
                desc="Lorem ipsum dolor sit amet"
                duration="45 min"
              />
            </div>
          </div>
        </div>
        <div id="register">
          <div className="header-holder"></div>
          <div className="screen-5-container">
            <div className="screen-5-texts">
              <h2 className="payment-title">Found the event interesting?</h2>
              <p className="payment-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                veritatis optio. Dolorem maiores expedita at impedit, voluptate
                ea, deserunt nisi ad rerum esse placeat iste similique
                doloremque.
              </p>
            </div>
            <div className="screen-5-payment">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <input
                  className="payment-input"
                  placeholder="Email"
                  type="text"
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                />

                <input
                  className="payment-input"
                  placeholder="Phone number"
                  type="text"
                  name="phoneNumber"
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </div>
              <button
                className="checkout-button"
                onClick={() => moveToPayment(email, phoneNumber)}
              >
                Proceed to checkout
              </button>
              <p style={{ color: "#ffffff" }}>{inputFieldsError}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
