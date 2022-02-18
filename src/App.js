import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "../src/pages/MainPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
