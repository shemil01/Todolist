import React from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  console.log("hgiidsdgisgd");
  return (
    <Router>
    <Home />
    <Routes>
      <Route path="/Registration" element={<Registration />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  </Router>
  );
};

export default App;
