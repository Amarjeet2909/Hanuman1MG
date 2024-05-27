import { useFormik } from "formik";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import * as Yup from "yup";
import { POSTAPI } from "../../../api/Index";
import { BASEURL } from "../../../constant";
const AddEmployee = ({
  showAddEmployee,
  setshowAddEmployee,
  getEmployeeList,
}) => {
  const [formInputs, setformInputs] = useState({});

  const initialvalues = {
    EntityId: "",
    EmployeeName: "",
    EmployeeNumber: "",
    EmployeeType: "",
    SiteOrLocation: "",
    SPOC: "",
    Who: "",
    VehicleNumber: "",
  };

  let validationSchema = Yup.object().shape({
    EntityId: Yup.number().required(),
    EmployeeName: Yup.string().required(),
    EmployeeNumber: Yup.string().required(),
    EmployeeType: Yup.string().required(),
    SiteOrLocation: Yup.string().required(),
    SPOC: Yup.string().required(),
    Who: Yup.string().required(),
    VehicleNumber: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const token = localStorage.getItem("usertoken");
      const data = { ...values, token };
      POSTAPI(
        BASEURL + "partner/mg/CreateEntityUsersWithNoLogin",
        data,
        (success) => {
          console.log(success);
          if (success.success == true) {
            setshowAddEmployee(false);
            getEmployeeList();
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
  });

  return (
    <Modal
      show={showAddEmployee}
      size="lg"
      onHide={() => setshowAddEmployee(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row mb-3">
          <div className="col-sm-6">
            <div class="form-group">
              <label>Entity Id</label>
              <input
                type="text"
                name="EntityId"
                defaulValue={formik.values.EntityId}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder=""
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div class="form-group">
              <label>Employee Name</label>
              <input
                type="text"
                name="EmployeeName"
                defaulValue={formik.values.EmployeeName}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder=""
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-6">
            <div class="form-group">
              <label>Employee Number</label>
              <input
                type="text"
                name="EmployeeNumber"
                defaulValue={formik.values.EmployeeNumber}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder=""
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div class="form-group">
              <label>Employee Type</label>
              <select
                class="form-control"
                id="exampleSelect"
                name="EmployeeType"
                defaulValue={formik.values.EmployeeType}
                onChange={formik.handleChange}
              >
                <option value="">Select an option</option>
                <option value="Driver">Driver</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-6">
            <div class="form-group">
              <label>Site Or Location</label>
              <input
                type="text"
                name="SiteOrLocation"
                defaulValue={formik.values.SiteOrLocation}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder=""
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div class="form-group">
              <label>SPOC</label>
              <input
                type="date"
                name="SPOC"
                defaulValue={formik.values.SPOC}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder=""
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-6">
            <div class="form-group">
              <label>Who</label>
              <input
                type="number"
                name="Who"
                defaulValue={formik.values.Who}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder=""
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div class="form-group">
              <label>Vehicle Number</label>
              <input
                type="text"
                name="VehicleNumber"
                defaulValue={formik.values.VehicleNumber}
                className="form-control"
                placeholder=""
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-md btn-success"
            type="submit"
            onClick={formik.handleSubmit}
          >
            Save
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddEmployee;
