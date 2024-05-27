import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
// import CustomMarker from "./CustomMarker";
import 'mapbox-gl/dist/mapbox-gl.css';
const MapComponent3 = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  

  const CustomMarker = ({ latitude, longitude, onClick }) => {
    return (
      <Marker
        longitude={longitude}
        latitude={latitude}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <svg
          onClick={onClick}
          className="marker"
          style={{
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FF0000"
            d="M12 0C7.5 0 4 3.5 4 8c0 3.3 1.7 6.2 4.3 8.4L12 24l3.7-7.6C18.3 14.2 20 11.3 20 8c0-4.5-3.5-8-8-8zm0 12c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
          />
        </svg>
      </Marker>
    );
  };
  
    return (
      <ReactMapGL
        // {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapboxApiAccessToken="pk.eyJ1Ijoic2NvdGhpcyIsImEiOiJjaWp1Y2ltYmUwMDBicmJrdDQ4ZDBkaGN4In0.sbihZCZJ56-fsFNKHXF8YQ"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {/* <Marker latitude={37.7577} longitude={-122.4376}>
          <div>My Marker</div>
        </Marker> */}
      </ReactMapGL>
    );
};

export default MapComponent3;
