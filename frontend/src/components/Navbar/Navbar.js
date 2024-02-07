import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navabr = () => {
  const [adminStatus, setAdminStatus] = useState(true);
  function login() {
    setAdminStatus(!adminStatus);
  }
  // new
  return (
    <div>
      <div className="header">
        <h6 className="logo">HomeCare Pro</h6>
        <h1 className="textheader">Welcome Admin</h1>
      </div>
      <div className="sidebar ">
        <div className="sidebar-item ">
          <i class="bi bi-tv"></i>
          Dashboard
        </div>
        {!adminStatus && (
          <div>
            <div className="sidebar-item ">
              <i class="bi bi-telegram"></i>My Requests
            </div>
            <div className="sidebar-item ">
              <i class="bi bi-joystick"></i>Status
            </div>
            <div className="sidebar-item ">
              <i class="bi bi-person-circle"></i>Profile
            </div>
            <div className="sidebar-item ">
              <i class="bi bi-card-checklist"></i>Feedback
            </div>
          </div>
        )}
        {adminStatus && (
          <div>
            <div className="sidebar-item ">
              <i class="bi bi-telegram"></i>Requests
            </div>
            <div className="sidebar-item ">
              <i class="bi bi-person-circle"></i>Housekeepers
            </div>
            <div className="sidebar-item ">
              <i class="bi bi-person-bounding-box"></i>Students
            </div>
            <div className="sidebar-item ">
              <i class="bi bi-card-checklist"></i>Feedbacks
            </div>
          </div>
        )}
        <Link to="/login">
          <div className="sidebar-item " onClick={login}>
            <i class="bi bi-box-arrow-left"></i>Logout
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navabr;
