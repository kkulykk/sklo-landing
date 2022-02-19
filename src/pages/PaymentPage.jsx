import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { processPayment } from "../services/paymentSystem/functions";
import "./PaymentPage.css";

const PaymentPage = () => {
  const { userEmail } = useParams();
  const navigate = useNavigate();

  return <div>
      PaymentPage<br />
      <button onClick={() => processPayment(userEmail)} >Pay</button>
      <button onClick={() => navigate("/")}>Skip payment</button>
  </div>;
};

export default PaymentPage;
