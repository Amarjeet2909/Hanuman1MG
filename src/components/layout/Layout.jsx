import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import "./Layout.css";
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
  CallDisptached,
  callDeclined,
} from "../../assets";
import NavbarCards from "./NavbarCards";
import HomeComponent from "../dashboard/Home/HomeComponent";
import EmployeeSidebar from "./EmployeeSidebar";
import { useLocation } from "react-router-dom";
const Layout = ({ children }) => {
  const url = window.location.href;
  const path = url.split("/").pop();
  const formattedString = path.replace(/-/g, " ");
  const capitalizedString = formattedString.replace(/\b\w/g, c => c.toUpperCase());
  let location = useLocation();
  return (
    <div className="layout d-flex pt-3">
      {/* ---------------  sidebar start  ------------- */}
      {location.pathname.includes("employee-dashboard") ? (
        <EmployeeSidebar />
      ) : (
        <Sidebar />
      )}
      {/* ---------------  sidebar end  ------------- */}

      <div className="w-100 ps-3 ">
        <div className="d-flex justify-content-between mb-3 ">
          <h1 className="link-heading">{"Critimeds Command Center"}</h1>
          <div className="user-img">
            <img src={user} alt="img"></img>
          </div>
        </div>
        {/* ---------------- blank page ------------ */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
