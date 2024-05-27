import React from "react";
import { Link } from "react-router-dom";
import {
  dashboard,
  logo,
  call,
  logout,
  report,
  bell,
  offer,
  ambulance,
  account,
  group,
  map,
  user,
  mapview,
  ambulanceImage,
  callRequest,
} from "../../assets";

const EmployeeSidebar = () => {
  return (
    <nav className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="d-flex align-items-center mb-3">
        <div className="icons-border">
          <img className="icons " src={dashboard} alt="icon"></img>
        </div>
        <Link className="text-decoration-none" to={"/"}>
          {" "}
          <h2 className="sidebar-links pt-2 ">Dashboard</h2>
        </Link>
      </div>
      <div className="d-flex align-items-center mb-3">
        <div className="icons-border">
          <img className="icons" src={call} alt="icon"></img>
        </div>
        <Link className="text-decoration-none">
          {" "}
          <h2 className="sidebar-links pt-2 ">Calls</h2>
        </Link>
      </div>
      <div className="d-flex align-items-center mb-3">
        <div className="icons-border">
          <img className="icons" src={ambulance} alt="icon"></img>
        </div>
        <Link className="text-decoration-none">
          {" "}
          <h2 className="sidebar-links pt-2 ">Vehicle Data</h2>
        </Link>
      </div>
      <div className="d-flex align-items-center mb-3">
        <div className="icons-border">
          <img className="icons" src={account} alt="icon"></img>
        </div>
        <Link className="text-decoration-none" to={"/employee"}>
          <h2 className="sidebar-links pt-2">Attendance</h2>
        </Link>
      </div>
      <div className="d-flex align-items-center mb-3">
        <div className="icons-border">
          <img className="icons" src={report} alt="icon"></img>
        </div>
        <Link className="text-decoration-none">
          <h2 className="sidebar-links pt-2">Reports</h2>
        </Link>
      </div>
      <div className="d-flex align-items-center mb-3">
        <div className="icons-border">
          <img className="icons" src={bell} alt="icon"></img>
        </div>
        <Link className="text-decoration-none">
          <h2 className="sidebar-links pt-2">Notifications</h2>
        </Link>
      </div>
      <div className="d-flex align-items-center mb-3">
        <div className="icons-border">
          <img className="icons" src={offer} alt="icon"></img>
        </div>
        <Link className="text-decoration-none">
          <h2 className="sidebar-links pt-2">Offers</h2>
        </Link>
      </div>
      <div className="d-flex align-items-center mb-3">
        <div className="icons-border logout-link ">
          <img className="logout-link icons" src={logout} alt="icon"></img>
        </div>
        <Link className=" logout-icon text-decoration-none ">
          <h2 className="sidebar-links pt-2">Log Out</h2>
        </Link>
      </div>
    </nav>
  );
};

export default EmployeeSidebar;
