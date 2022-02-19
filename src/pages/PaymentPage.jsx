import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { processPayment } from "../services/paymentSystem/functions";
import apiKey from "../services/emailSender/emailKey"
import "./PaymentPage.css";

const PaymentPage = () => {
  const { userEmail } = useParams();
  const navigate = useNavigate();

  const paymentSuccess = (email) => {
    processPayment(email);
    navigate("/login");
  };

  const handleSubmit = () => {
    emailjs.send("service_6iyneb9","template_o1rluef",{
      sendTo: "fepih50308@ishop2k.com",
      }, apiKey.USER_ID)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  };

  return (
    <div>
      PaymentPage
      <br />
      <button onClick={() => paymentSuccess(userEmail)}>Pay</button>
      <button onClick={() => navigate("/")}>Skip payment</button>
      <button onClick={() => handleSubmit()}>Send Email</button>
    </div>
  );
};

export default PaymentPage;
