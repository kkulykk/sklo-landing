import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { processPayment } from "../services/paymentSystem/functions";
import { sendStreamLink } from "../services/emailSender/functions";
import "./PaymentPage.css";

const PaymentPage = () => {
  const { userEmail } = useParams();
  const navigate = useNavigate();

  const paymentSuccess = (email) => {
    processPayment(email);
    sendStreamLink(email, "http://localhost:3000/stream")
    navigate("/login");
  };

  return (
    <div>
      PaymentPage
      <br />
      <button onClick={() => paymentSuccess(userEmail)}>Pay</button>
      <button onClick={() => navigate("/")}>Skip payment</button>
    </div>
  );
};

export default PaymentPage;
