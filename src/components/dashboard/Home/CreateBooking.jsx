import { useFormik } from "formik";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import * as Yup from "yup";
import { POSTAPI } from "../../../api/Index";
import { BASEURL } from "../../../constant";
const CreateBooking = ({
    setopenBooking,
    openBooking,
    recentCalls,
    recordData,
    vehicleAudit,
}) => {
    const [formInputs, setformInputs] = useState({});

    const initialvalues = {
        customerphno: "",
        customername: "",
        customeraddress: "",
        gender: 0,
        dropaddress: "",
        invoiceamount: 0,
        ordermode: 0,
        ordertype: 1,
        comments: "Required an ambulance at customer address",
        orderdetails: "Detailsss",
        execID: -1,
        orderstatusmodifyoperation: 0,
        custprefdatetime: "2024-05-12 14:00:00+05:30",
        deferred: 0,
        customeraddresslatlong: "28.4869388,77.1310871",
        customfieldval1: "CF1",
        paymentmode: 0,
        source: 0,
        invoicedatetime: "2024-05-12 14:00:00+05:30",
        email: "ac@gmail.com",
        quantity: 1,
        vehicleData: "Pass the vehicle number",
        dob: "1992-02-24",
        numVisitsReqd: 1,
        discount: 0,
        serviceCharge: 0,
        slotID: 0,
        dropaddresslatlong: "co-ordinates of the destination",
        dropdowns: "12/3"
    };

    let validationSchema = Yup.object().shape({
        customerphno: Yup.number().required(),
        customername: Yup.string().required(),
        customeraddress: Yup.string().required(),
        gender: Yup.string().required(),
        dropaddress: Yup.string().required(),
    });

    const formik = useFormik({
        initialValues: initialvalues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
            const token = localStorage.getItem("usertoken");
            const data = { ...values, token };
            POSTAPI(
                BASEURL + "partner/optililve/CreateVisitAndBooking",
                data,
                (success) => {
                    console.log(success);
                    if (success.success == true) {
                        setopenBooking(false);
                        recentCalls();
                        recordData();
                        vehicleAudit();
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
            show={openBooking}
            size="lg"
            onHide={() => setopenBooking(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create Booking</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row mb-3">
                    <div className="col-sm-6">
                        <div class="form-group">
                            <label>Patient Phone</label>
                            <input
                                type="number"
                                name="customerphno"
                                defaulValue={formik.values.customerphno}
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder=""
                                onChange={formik.handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div class="form-group">
                            <label>Patient Name</label>
                            <input
                                type="text"
                                name="customername"
                                defaulValue={formik.values.customername}
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
                            <label>Patient Address</label>
                            <input
                                type="text"
                                name="customeraddress"
                                defaulValue={formik.values.customeraddress}
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder=""
                                onChange={formik.handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div class="form-group">
                            <label>Ambulance Type</label>
                            <select
                                class="form-control"
                                id="exampleSelect"
                                name=""
                                defaulValue={formik.values}
                            // onChange={formik.handleChange}
                            >
                                <option value="">Select an option</option>
                                <option value="">Patient Rickshaw</option>
                                <option value="">Mourtuary</option>
                                <option value="">Basic Support</option>
                                <option value="">ICU on Wheel</option>
                                <option value="">Train Ambulance</option>
                                <option value="">Air Ambulance</option>
                                <option value="">NICU Ambulance</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-6">
                        <div class="form-group">
                            <label>Drop Aaddress</label>
                            <input
                                type="text"
                                name="dropaddress"
                                defaulValue={formik.values.dropaddress}
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder=""
                                onChange={formik.handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div class="form-group">
                            <label>Gender</label>
                            <select
                                class="form-control"
                                id="exampleSelect"
                                name="gender"
                                defaulValue={formik.values.gender}
                                onChange={formik.handleChange}
                            >
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-6">
                        <div class="form-group">
                            <label>Amount</label>
                            <input
                                type="number"
                                name="invoiceamount"
                                defaulValue={formik.values.invoiceamount}
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder=""
                                onChange={formik.handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div class="form-group">
                            <label>Driver Name</label>
                            <input
                                type="text"
                                name="VehicleNumber"
                                defaulValue={formik.values.VehicleNumber}
                                className="form-control"
                                placeholder=""
                            // onChange={formik.handleChange}
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

export default CreateBooking;
