import React, { useState } from "react";
import NavbarCards from "../layout/NavbarCards";
import {
  callCompleted,
  callDeclined,
  CallDisptached,
  callRequest,
} from "../../assets";
import "../hrManagement/Employees.css";
import Greetings from "../commonComponents/Greetings";
import RecentNews from "../commonComponents/RecentNews";
import { Link } from "react-router-dom";
import MyCalendar from "./MyCalendar";
import { FaChevronDown } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
const Employees = () => {
  const [cards, setcards] = useState([
    {
      icon: callRequest,
      title: "Trips Completed",
      value: 2400,
      share: 9.5,
    },
    {
      icon: CallDisptached,
      title: "Trips Rescheduled",
      value: 2100,
      share: 9.5,
    },
    {
      icon: callCompleted,
      title: "call Completed",
      value: 2050,
      share: 9.5,
    },
    {
      icon: callDeclined,
      title: "call Declined",
      value: 150,
      share: 9.5,
    },
  ]);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    // Do something with the selected file
  };
  return (
    <div className="">
      <div className="d-flex justify-content-between ">
        {cards.map((item) => {
          return (
            <div className="">
              <NavbarCards item={item} />
            </div>
          );
        })}
      </div>
      <div className="d-flex gap-4 mt-3">
        <Greetings />
        <div className="common-border w-75">
          <div className="  d-flex justify-content-between align-items-center p-3">
            <div className="datePickerContainer">
              <input type="date" className="datePickerInput" />
              <span className="arrowDown">
                <FaAngleDown />
              </span>
            </div>
            <span class="visually-hidden">Toggle Dropdown</span>
            <ul class="dropdown-menu">
              <li>22-12-2023</li>
              <li>23-12-2023</li>
              <li>24-12-2023</li>
            </ul>
            <Link className="text-decoration-none veiw-attendence ">
              View Attendance
            </Link>
          </div>
          <div className="d-flex justify-content-between mx-3">
            <div className=" common-border p-3 mb-2 me-2 d-flex flex-column gap-2 ">
              <h2 className="mark-attendance">Mark Attendance</h2>
              <button type="button" className="btn btn-success btn-sm mx-3  clock">Clock In</button>
              <button type="button" className="btn btn-danger btn-sm mx-3 mt-2 clock">Clock Out</button>
            </div>
            <div className="middle-line mb-2"></div>
            <div className=" common-border p-3  d-flex flex-column mb-2 ms-2" >
              <h2 className="mark-attendance mb-0">Upload Images</h2>
              <h4 className="select-images mt-1 mb-2">Select Images</h4>
              <div className="d-flex justify-content-between">
                <div className="">
                  <label htmlFor="fileInput" className="custom-file-input ">
                    <div className="common-border tiplus">
                      <TiPlus />
                    </div>
                    <h4 className="image-side"> Front</h4>
                  </label>
                  <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileInputChange} />
                </div>
                <div className="">
                  <label htmlFor="fileInput" className="custom-file-input ">
                    <div className="common-border tiplus">
                      <TiPlus />
                    </div>
                    <h4 className="image-side">  Back</h4>
                  </label>
                  <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileInputChange} />
                </div>
                <div className="">
                  <label htmlFor="fileInput" className="custom-file-input ">
                    <div className="common-border tiplus">
                      <TiPlus />
                    </div>
                    <h4 className="image-side">  left</h4>
                  </label>
                  <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileInputChange} />
                </div>
                <div className="">
                  <label htmlFor="fileInput" className="custom-file-input ">
                    <div className="common-border tiplus">
                      <TiPlus />
                    </div>
                    <h4 className="image-side">right</h4>
                  </label>
                  <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileInputChange} />
                </div>
              </div>
              <button type="button" class="btn btn-sm btn-outline-success text-dark mx-3 px-3 py-0 upload">Upload</button>
            </div>

          </div>
        </div>
      </div>

      <div className="d-flex gap-4 mt-3 ">
        <div className=" map-view p-3 common-border calender">
          <h2 className="common-heading">Calander</h2>
          <div style={{ height: "-webkit-fill-available" }}>
            <MyCalendar />
          </div>
        </div>
        <div>
          <RecentNews />
        </div>
      </div>
    </div>
  );
};

export default Employees;
