import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forgotpassword from "../components/Forgotpassword/Forgotpassword";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";

const Routing = (
  <Router>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
    </Routes>
  </Router>
);

export default Routing;
