import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";
import { Location, ambulancelocate, search } from "../../assets";
import "./map.css";
import MapAutoComplete from "./MapAutoComplete";
import AmbulanceInformation from "./AmbulanceInformation";

const MapComponent4 = () => {
  const [data, setdata] = useState([
    {
      name: "New York City",
      latitude: 40.7128,
      longitude: -74.006,
    },
    {
      name: "Los Angeles",
      latitude: 34.0522,
      longitude: -118.2437,
    },
    {
      name: "London",
      latitude: 51.5074,
      longitude: -0.1278,
    },
    {
      name: "Tokyo",
      latitude: 35.6895,
      longitude: 139.6917,
    },
    {
      name: "Sydney",
      latitude: -33.8688,
      longitude: 151.2093,
    },
  ]);
  return (
    <div className="map common-border position-relative">
      <div className="d-flex justify-content-between">
        <div className="display-search d-flex justify-content-around align-items-center px-3">
          <img src={Location}></img>
          <h2 className="sector mb-0">Sector 17, Gurgaon</h2>
          <h2 className="sector green mb-0">28.47 N - 77.04 E</h2>
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

      <Map defaultCenter={[50.879, 4.6997]} defaultZoom={20}>
        {data.map((map, index) => {
          return (
            <Marker
              width={50}
              anchor={[map.latitude, map.longitude]}
              color={"red"}
              onClick={() => alert("hue + 20")}
            >
              <img src={ambulancelocate} alt="" />
            </Marker>
          );
        })}
      </Map>
    </div>
  );
};

export default MapComponent4;
