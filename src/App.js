import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "../src/pages/MainPage";
import PaymentPage from "./pages/PaymentPage";
import LoginPage from "./pages/LoginPage";
import StreamPage from "./pages/StreamPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/:userEmail/payment" element={<PaymentPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/stream" element={<StreamPage />} />
      </Routes>
    </Router>
  );
};

export default App;
