import React, { useEffect, useState } from "react";
import "../hrManagement/Employees.css";
import {
  Delete,
  Edit,
  View,
  callCompleted,
  callDeclined,
  CallDisptached,
  callRequest,
} from "../../assets";
import { IoEye } from "react-icons/io5";
import { BiEditAlt } from "react-icons/bi";
import NavbarCards from "../layout/NavbarCards";
import DownloadButton from "../commonComponents/DownloadButton";
import NormalPagination from "../commonComponents/NormalPagination";
import { POSTAPI } from "../../api/Index";
import { BASEURL } from "../../constant";
import AddEmployee from "./Employee/AddEmployee";
import EditEmployee from "./Employee/EditEmployee";
import moment from "moment";
const HrManagement = () => {
  const [showAddEmployee, setshowAddEmployee] = useState(false);
  const [showEditEmployee, setshowEditEmployee] = useState(false);
  const [employeeData, setemployeeData] = useState([]);
  const [rowData, setrowData] = useState({});
  const [cards, setcards] = useState([
    {
      icon: callRequest,
      title: "Total Employees",
      value: 0,
      share: 9.5,
    },
    {
      icon: CallDisptached,
      title: "Total Active",
      value: 0,
      share: 9.5,
    },
    {
      icon: callCompleted,
      title: "Total on Leave",
      value: 0,
      share: 9.5,
    },
    {
      icon: callDeclined,
      title: "Total Standby",
      value: 0,
      share: 9.5,
    },
  ]);

  const getEmployeeList = () => {
    const data = {
      token: localStorage.getItem("usertoken"),
    };
    POSTAPI(
      BASEURL + "partner/mg/GetEntityOrgUsers",
      data,
      (success) => {
        setemployeeData(success.data);
      },
      (error) => {
        console.log(error);
        setemployeeData([]);
      }
    );
  };

  useEffect(() => {
    getEmployeeList();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between pb-3" style={{gap:"50px"}}>
        {cards.map((item) => {
          return (
            <div className="w-100">
              <NavbarCards item={item} />
            </div>
          );
        })}
      </div>
      <div className="common-border w-100 h-100 py-3 px-4 ">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex  gap-4">
            <h2 className="employee-list mb-0">Employee List</h2>
            <DownloadButton rowData={employeeData} fileName={"employee"}/>
          </div>
          <button
            className="button-text add-employee "
            onClick={() => setshowAddEmployee(true)}
          >
            Add Employee
          </button>
        </div>
        {/* ------ table ------ */}
        <table className="my-3">
          <thead>
            <tr>
              <th>S. No</th>
              <th>Name</th>
              <th>EMP No.</th>
              <th>Type</th>
              <th>Site</th>
              <th>SPOC</th>
              <th>Vehical Number</th>
              <th>Paramedic</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{employee?.EmployeeName}</td>
                  <td>{employee?.EmployeeNumber}</td>
                  <td>{employee?.EmployeeType}</td>
                  <td>{employee?.SiteOrLocation}</td>
                  <td>{moment(employee?.SPOC).format("DD-MM-YYYY")}</td>
                  <td className="text-success">{employee.VehicleNumber}</td>
                  <td>{employee.Who}</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-1">
                      <button className="eye">
                        {" "}
                        <IoEye />
                      </button>
                      <button
                        className="edit"
                        onClick={() => {
                          setrowData(employeeData[index]);
                          setshowEditEmployee(true);
                        }}
                      >
                        <BiEditAlt />
                      </button>
                      <button className="delete">
                        <img className="img-delete" src={Delete}></img>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="">
          <NormalPagination />
        </div>
      </div>
      {showAddEmployee ? (
        <AddEmployee
          showAddEmployee={showAddEmployee}
          setshowAddEmployee={setshowAddEmployee}
          getEmployeeList={getEmployeeList}
        />
      ) : null}
      {showEditEmployee ? (
        <EditEmployee
          showEditEmployee={showEditEmployee}
          setshowEditEmployee={setshowEditEmployee}
          getEmployeeList={getEmployeeList}
          rowData={rowData}
        />
      ) : null}
    </>
  );
};

export default HrManagement;
