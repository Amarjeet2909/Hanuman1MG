import { useFormik } from "formik";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import * as Yup from "yup";
import { POSTAPI } from "../../../api/Index";
import { BASEURL } from "../../../constant";
import moment from "moment";
const EditEmployee = ({
  showEditEmployee,
  setshowEditEmployee,
  getEmployeeList,
  rowData,
}) => {
  const [formInputs, setformInputs] = useState({});
  const initialvalues = {
    EntityId: rowData?.EntityId,
    EmployeeName: rowData?.EmployeeName,
    EmployeeNumber: rowData?.EmployeeNumber,
    EmployeeType: rowData?.EmployeeType,
    SiteOrLocation: rowData?.SiteOrLocation,
    SPOC: moment(rowData?.SPOC).format("YYYY-MM-DD"),
    Who: rowData?.Who,
    VehicleNumber: rowData?.VehicleNumber,
    EmployeeId:rowData?.Id
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
            setshowEditEmployee(false);
            getEmployeeList();
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
  });

  console.log(formik.values);

  return (
    <Modal
      show={showEditEmployee}
      size="lg"
      onHide={() => setshowEditEmployee(false)}
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
                value={formik.values.EntityId}
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
                value={formik.values.EmployeeName}
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
                value={formik.values.EmployeeNumber}
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
                value={formik.values.EmployeeType}
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
                value={formik.values.SiteOrLocation}
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
                value={formik.values.SPOC}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder=""
                onChange={(e) => {
                  formik.setFieldValue(
                    moment(e.target.value).format("DD-MM-YYYY")
                  );
                }}
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
                value={formik.values.Who}
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
                value={formik.values.VehicleNumber}
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

export default EditEmployee;
