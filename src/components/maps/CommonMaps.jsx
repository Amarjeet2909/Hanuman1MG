import React, { useState } from "react";
import MapAutoComplete from "./MapAutoComplete";
import MapComponent from "./MapComponent";
import { Location } from "../../assets";
import AmbulanceInformation from "./AmbulanceInformation";
import { useFormik } from "formik";
const CommonMaps = (props) => {
  const initialvalues = {
    VehicleId:null,
    Lat:null,
    Long:null,
    VehicleName:null,
    Location:null
  };
  
  const formik = useFormik({
    initialValues: initialvalues,
    onSubmit: (values) => {
      const token = localStorage.getItem("usertoken");
      const data = { ...values, token };
      POSTAPI(
        BASEURL + "partner/mg/CreateEntityUsersWithNoLogin",
        data,
        (success) => {
          if (success.success == true) {
            console.log(success);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
  });

  const [currentMarker, setcurrentMarker] = useState(null);
  return (
    // <div className={currentMarker!=null ? "d-flex":""}>
    <div className={"d-flex"}>
      <div className="map common-border position-relative w-100  ">
        <div className="d-flex justify-content-between">
          <div className="display-search d-flex justify-content-around align-items-center px-3">
            <img src={Location}></img>
            {/* <h2 className="sector mb-0">Sector 17, Gurgaon</h2> */}
            <input
              type="text"
              className="location-search bg-transparent"
              placeholder="Search Location"
              onChange={formik.handleChange}
              name="Location"
              value={formik.values.Location}
            />
            <h2 className="sector green mb-0">28.47 N - 77.04 E</h2>
            {/* <div className="d-flex gap-2 green">
              <input
                type="text"
                className="lat-lng bg-transparent"
                placeholder="Lat"
                onChange={formik.handleChange}
                name="Lat"
                value={formik.values.Lat}
              />
              <h5 className="p-0 m-0">-</h5>
              <input
                type="text"
                className="lat-lng bg-transparent"
                placeholder="Lng"
                onChange={formik.handleChange}
                name="Long"
                value={formik.values.Long}
              />
            </div> */}
          </div>
          <div className=" map-auto-complete">
            <div>
              {/* <img src={search}></img> */}
              <MapAutoComplete />
            </div>
          </div>
          {/* <div >
          <AmbulanceInformation />
        </div> */}
        </div>
        <MapComponent setcurrentMarker={setcurrentMarker} />
      </div>
      {currentMarker != null ? (
        <AmbulanceInformation setcurrentMarker={setcurrentMarker} currentMarker={currentMarker}/>
      ) : null}
    </div>
  );
};

export default CommonMaps;
