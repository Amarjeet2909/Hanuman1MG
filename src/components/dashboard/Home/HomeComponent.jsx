import React, { useEffect, useState } from "react";
import {
  ambulanceImage,
  call,
  callRequest,
  mapview,
  CallDisptached,
  callDeclined,
  callCompleted,
} from "../../../assets";
import NavbarCards from "../../layout/NavbarCards";
import { Link } from "react-router-dom";
import PaginationComponent from "../../commonComponents/DoubleArrowPagination";
import PieChartWithCenterLabel from "../../commonComponents/Chart";
import Greetings from "../../commonComponents/Greetings";
import RecentNews from "../../commonComponents/RecentNews";
import NormalPagination from "../../commonComponents/NormalPagination";
import { POSTAPI } from "../../../api/Index";
import { BASEURL } from "../../../constant";
import CreateBooking from "./CreateBooking";
import moment from "moment";

const HomeComponent = () => {
  const [openBooking, setopenBooking] = useState(false)
  const [userData, setuserData] = useState([
    // {
    //   srNo: 1,
    //   name: "Amit J.",
    //   mobileNo: 919988776655,
    //   ageGender: "65/Male",
    //   date: 20 - 12 - 2023,
    //   time: 1455,
    //   emergency: "Chest Pain",
    //   latLong: "28.67 N - 77.06 E",
    // },
    // {
    //   srNo: 2,
    //   name: "Amit J.",
    //   mobileNo: 919988776655,
    //   ageGender: "65/Male",
    //   date: 20 - 12 - 2023,
    //   time: 1455,
    //   emergency: "Chest Pain",
    //   latLong: "28.67 N - 77.06 E",
    // },
    // {
    //   srNo: 3,
    //   name: "Amit J.",
    //   mobileNo: 919988776655,
    //   ageGender: "65/Male",
    //   date: 20 - 12 - 2023,
    //   time: 1455,
    //   emergency: "Chest Pain",
    //   latLong: "28.67 N - 77.06 E",
    // },
    // {
    //   srNo: 4,
    //   name: "Amit J.",
    //   mobileNo: 919988776655,
    //   ageGender: "65/Male",
    //   date: 20 - 12 - 2023,
    //   time: 1455,
    //   emergency: "Chest Pain",
    //   latLong: "28.67 N - 77.06 E",
    // },
    // {
    //   srNo: 5,
    //   name: "Amit J.",
    //   mobileNo: 919988776655,
    //   ageGender: "65/Male",
    //   date: 20 - 12 - 2023,
    //   time: 1455,
    //   emergency: "Chest Pain",
    //   latLong: "28.67 N - 77.06 E",
    // },
  ]);

  const [auditData, setauditData] = useState([]);
  const [cards, setcards] = useState([
    {
      icon: callRequest,
      title: "Call Requested",
      value: 2400,
      name: "callRequested",
      share: 9.5,
    },
    {
      icon: CallDisptached,
      title: "Call Dispatched",
      value: 2100,
      name: "CallDisptached",
      share: 9.5,
    },
    {
      icon: callCompleted,
      title: "Call Completed",
      value: 2050,
      name: "callCompleted",
      share: 9.5,
    },
    {
      icon: callDeclined,
      title: "Call Declined",
      value: 150,
      name: "callDeclined",
      share: 9.5,
    },
  ]);
  const [records, setrecords] = useState({});
  useEffect(() => {
    recentCalls();
    recordData();
    vehicleAudit();
  }, []);

  const vehicleAudit = async () => {
    const data = {
      token: localStorage.getItem("usertoken"),
    };
    POSTAPI(
      BASEURL + "partner/mg/GetVehicleAudit",
      data,
      (success) => {
        setauditData(success.data);
      },
      (error) => {
        console.log(error);
        setauditData([]);
      }
    );
  };

  const recentCalls = async () => {
    const data = {
      token: localStorage.getItem("usertoken"),
      "Entity": "10",
      "StartDate": "2022-05-21",
      "EndDate": "2024-05-03"
    };
    POSTAPI(
      BASEURL + "ambulance/GetAmbulanceBooking",
      data,
      (success) => {
        setuserData(success.data);
      },
      (error) => {
        console.log(error);
        setuserData([]);
      }
    );
  };

  const recordData = async () => {
    const data = {
      token: localStorage.getItem("usertoken"),
    };
    POSTAPI(
      BASEURL + "partner/mg/GetMGDashboard",
      data,
      (success) => {
        const extractedValues = success.data[0];
        const updatedDataArray = cards.map(item => {
          const key = Object.keys(extractedValues).find(key => item.name.toLocaleLowerCase() == key.toLowerCase());
          if (key) {
            return { ...item, value: extractedValues[key] };
          }
          return item;
        });
        console.log(updatedDataArray)
        setcards(updatedDataArray);
      },
      (error) => {
        console.log(error);
        setrecords({});
      }
    );
  };

  return (
    <div className="dashboard ">
      <div
        className="d-flex justify-content-between py-1"
        style={{ gap: "50px" }}
      >
        {console.log(cards)}
        {cards.map((item) => {
          return (
            <div className="w-100">
              <NavbarCards item={item} />
            </div>
          );
        })}
      </div>

      {/* ----------------  greeting start  ---------------- */}
      {/* <div className="d-flex gap-4 mt-3">
        <Greetings />
        <RecentNews />
      </div> */}
      {/* ------------------  greeting end ------------------ */}

      {/* ----------  map view start ------------ */}
      <div className="map-view common-border d-flex mt-3">
        <div>
          <h2 className="common-heading pt-4">Map View</h2>
          <p className="map-information">
            Lorem ipsum dolor sit amet consectetur. Mi tristique quis faucibus
            nulla iaculis sed molestie. Nulla dui in eget non fusce tortor
            pellentesque. Est posuere cursus eleifend purus nibh ac. Amet
            aliquet sapien senectus tempor vulputate urna et mus.
          </p>
          <Link className="map-link " to={"/map-live-view"}>
            View Live Map
          </Link>
        </div>
        <img src={mapview} alt="image"></img>
      </div>
      {/* ----------  map view end ------------ */}

      {/* ----------- recent call details start ----------- */}
      <div className="  mt-3 d-md-flex gap-3">
        <div className="call-details common-border" style={{ flex: 1 }}>
          <div className="d-flex pt-3 pb-2 ">
            <h2 className="common-heading me-auto">Recent Call Details</h2>
            <Link className="view-details text-decoration-none pt-2 pe-2">
              View All
            </Link>
            <button className="btn btn-sm btn-success" onClick={() => setopenBooking(true)}>Create Booking</button>
          </div>
          <table>
            <thead>
              <tr>
                <th className="th-details">S. No</th>
                <th className="th-details">Name</th>
                <th className="th-details">Mobile No.</th>
                <th className="th-details">Age/Gender</th>
                <th className="th-details">Date</th>
                <th className="th-details">Time</th>
                <th className="th-details">Emergency Type</th>
                <th className="th-details"> Pickup Location</th>
                <th className="th-details"> Drop Location</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => {
                console.log(user, "user")
                return (
                  <tr key={user.srNo}>
                    <td className="sr-border td-details">{index}</td>
                    <td className="td-details">{user.PaitentName}</td>
                    <td className="td-details">{user.PatientNumber}</td>
                    <td className="td-details">65/Male</td>
                    <td className="td-details">{moment(user.BookingDate).format("DD-MM-YYYY")}</td>
                    <td className="td-details">{moment(user.BookingDate).format("HH:MM")}</td>
                    <td className="td-details">Chest Pain</td>
                    <td className="td-details text-wrap">{user.SourceAddress}</td>
                    <td className="td-details text-wrap">{user.DestAddress}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="pb-3 pe-2">
            {" "}
            <PaginationComponent />
          </div>
        </div>
        {/* <div className="graph common-border d-flex flex-column ">
          <h2 className="text-center pt-3 mb-0 turn-around">
            Turn Around Time
          </h2>
          <PieChartWithCenterLabel />
          <h4 className="text-center">Details</h4>
        </div> */}
      </div>

      {/* ----------- recent call details  end----------- */}

      {/* --------- audit window  -------- */}
      <div className="common-border mt-3 audit-window">
        <div className="d-flex pt-3 pb-2 ">
          <h2 className="common-heading me-auto">Audit Window</h2>
          <Link className="view-details text-decoration-none pt-2 pe-2">
            View All
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>S. No</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Inspection No.</th>
              <th>Inspection Date</th>
              <th>Images</th>
              <th>Status</th>
              <th>Inspector</th>
            </tr>
          </thead>
          <tbody>
            {auditData && auditData.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{data.ItemName}</td>
                  <td>{data.Quantity}</td>
                  <td>{data.InspectionNumber}</td>
                  <td>{data.InspectionDate}</td>
                  <td>
                    <Link className="text-decoration-none ">{"view"}</Link>
                  </td>
                  <td className="text-success">{data.Status}</td>
                  <td>{data.InspectorWho}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-flex justify-content-end pt-5 pb-2">
          <NormalPagination />
        </div>
      </div>
      {openBooking ? <CreateBooking recentCalls={recentCalls}
        recordData={recordData}
        vehicleAudit={vehicleAudit} setopenBooking={setopenBooking} openBooking={openBooking} /> : null}
    </div>
  );
};

export default HomeComponent;
