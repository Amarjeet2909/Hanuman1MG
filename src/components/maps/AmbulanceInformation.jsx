import React, { useEffect, useState } from "react";
import "./map.css";
import {
  AmbulanceData,
  Close,
  FluentLocation,
  gmeet,
  LogoHanuman,
  MapAmbulance,
  patientVitals,
  Share,
  Staff,
  Star,
  VideoCall,
} from "../../assets";
import { Link } from "react-router-dom";
import "../maps/popup.css";

const AmbulanceInformation = (props) => {
  const [vehicle, setVehicle] = useState({});
  const [popups, setPopups] = useState([]);

  const [data, setData] = useState([
    { srNO: 1, items: "Oxygen", quantity: "2 Cylinders = 40KG", status: "Working" },
    { srNO: 2, items: "Oxygen", quantity: "2 Pieces", status: "Working" },
    { srNO: 3, items: "Oxygen", quantity: "30 Pieces", status: "Working" },
    { srNO: 4, items: "Oxygen", quantity: " 2 Pieces", status: "Working" },
    { srNO: 5, items: "Oxygen", quantity: "2 Pieces", status: "Working" },
  ]);

  const [vehiclesData, setVehiclesData] = useState([
    {
      VehicleId: 572,
      VehicleNumber: "T0324DL7748B",
      Model: "03/2024",
      title: "Ambulance Handia",
      amtek_link: "https://amtek.24x7healthcare.live/live?amb_id=NH%20HANDIA",
      vlink: "https://camera.smartambulance.in/stream?ambulanceId=0CB8155B1C14",
      EMTNurse: [
        { type: "EMT Nurse", name: "Mr. Vimlesh Kumar" },
        { type: "EMT Nurse", name: "Mr. Ramdhani Bind" },
        { type: "EMT", name: "Mr. Rajendra Kumar" },
      ],
    },
    {
      VehicleId: 573,
      VehicleNumber: "T0324DL7746B",
      Model: "03/2024",
      title: "Ambulance Kokhraj",
      amtek_link: "https://amtek.24x7healthcare.live/live?amb_id=NH%20KOKRAJ",
      vlink: "https://camera.smartambulance.in/stream?ambulanceId=0CB815595B7C",
      EMTNurse: [
        { type: "EMT Nurse", name: "Mr. Akhilesh" },
        { type: "EMT Nurse", name: "Mr. Avadhesh" },
        { type: "EMT Nurse", name: "Mr. Dinesh Kumar patel" }
      ],
    },
  ]);

  useEffect(() => {
    const findData = vehiclesData.find((item) => item.VehicleId === props.currentMarker.VehicleId);
    setVehicle(findData || {});
  }, [props.currentMarker, vehiclesData]);

  const openPopup = (link) => {
    if (!popups.includes(link)) {
      setPopups([...popups, link]);
    }
  };

  const closePopup = (link) => {
    setPopups(popups.filter((popup) => popup !== link));
  };

  return (
    <div className="ambulance-information">
      <div className="d-flex justify-content-between map-location-background">
        <div className="logo-background">
          <img className="logo-map" src={LogoHanuman} alt="Logo" />
        </div>
        <div className="d-flex align-items-center justify-content-center gap-2">
          {/* Location information */}
        </div>
      </div>

      <div className="pt-0 p-3">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="map-heading mb-0">{vehicle?.title}</h1>
          <div>
            <img src={Share} alt="Share" />
            <button className="btn" onClick={() => props.setcurrentMarker(null)}>
              <img src={Close} alt="Close" />
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className="w-100">
            <h2 className="vehicle m-0">Reg No. - {vehicle?.VehicleNumber}</h2>
            <h3 className="color-change vehicle m-0">Vehicle Model: {vehicle?.Model}</h3>
          </div>
          <div className="w-100 d-flex justify-content-end">
            <div className="w-25 d-inline-flex p-1">
              <button onClick={() => openPopup(vehicle.amtek_link)} style={{  border: "none" }}>
                <img className="w-100" src={AmbulanceData} alt="Ambulance Data" />
              </button>
            </div>
            <div className="w-25 d-inline-flex p-1">
              <button onClick={() => openPopup("https://wrenrealtime.com/health-details")} style={{  border: "none" }}>
                <img className="w-100" src={patientVitals} alt="Patient Vitals" />
              </button>
            </div>
            <div className="w-25 d-inline-flex p-1">
              <button onClick={() => openPopup(vehicle.vlink)} style={{ border: "none" }}>
                <img className="w-100" src={VideoCall} alt="Video Call" />
              </button>
            </div>

            <div className="w-25 d-inline-flex p-1">
              <a
                  href="https://meet.google.com/qbs-thuo-wgh"
                  target="_blank"
                  className=""
                  style={{ fontSize: "10px" }}
              >
                  <img src={gmeet} alt="Video Call" className="w-100" />
              </a>
            </div>
          </div>
        </div>

        <div className="map-ambulance">
          <img className="img" src={MapAmbulance} alt="Map Ambulance" />
        </div>

        <div className="staff my-3 p-3">
          <h2 className="staff-details">Staff Details</h2>
          {vehicle?.EMTNurse?.length > 0 && vehicle.EMTNurse.map((item, index) => (
            <div key={index} className="d-flex justify-content-between align-items-end mb-2">
              <div>
                <h2 className="staff-info mb-0">{item.name}</h2>
                <h3 className="staff-profession mb-0">{item.type}</h3>
              </div>
              <h3 className="staff-profession mb-0">
                Ratings -
                {[...Array(6)].map((_, i) => (
                  <img key={i} src={Star} alt="Star" />
                ))}
              </h3>
            </div>
          ))}
        </div>

        <div className="equipment-list my-3 p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="equipment-heading mb-0">Equipment List</h2>
            <Link className="view-all text-decoration-none">View All</Link>
          </div>
          <table className="table-borderedd border-secondary">
            <thead>
              <tr>
                <th className="etable-heading">Items</th>
                <th className="etable-heading">Quantity & Description</th>
                <th className="etable-heading">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.srNO}>
                  <td className="etable-heading td-color">
                    {item.srNO}.{item.items}
                  </td>
                  <td className="etable-heading td-color">{item.quantity}</td>
                  <td className="etable-heading td-color">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {popups.map((link, index) => (
        <div
          key={index}
          className="popup-window"
          style={{ left: `${index * 33}%`, marginLeft: `${index * 0}px` }} /* Set the left position dynamically */
        >
          <button className="close-popup" onClick={() => closePopup(link)}>
            X
          </button>
          <iframe src={link} title={`Popup ${index}`} className="popup-content"></iframe>
        </div>
      ))}
    </div>
  );
};

export default AmbulanceInformation;