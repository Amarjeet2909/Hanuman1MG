import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import MarkerClusterer from "@googlemaps/markerclustererplus";
import { POSTAPI } from "../../api/Index";
import { BASEURL } from "../../constant";
import { ambulancelocate } from "../../assets";

export default function MapComponent(props) {
  const [map, setMap] = useState(null);
  const [maps, setMaps] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js";
    script.async = true;
    document.body.appendChild(script);
    getMapData();
  }, []);

  const getMapData = () => {
    const data = {
      token: localStorage.getItem("usertoken"),
    };
    POSTAPI(
      BASEURL +
        "partner/mg/GetVehicleCurrentLocationBasedOnFilters",
      data,
      (success) => {
        if (
          success &&
          success?.data &&
          success?.data?.length > 0
        ) {
          const allCoordinates = success.data.map(
            (item) => ({
              lat: item.Lat,
              lng: item.Lon,
              data: item, // Attach the entire item data to the marker
            })
          );
          setMarkers(allCoordinates);
          if (success.data.length > 0) {
            const center = {
              lat: success.data[0].Lat,
              lng: success.data[0].Lon,
            };
            setCenter(center);
            setZoom(10); // Set a default zoom level
            setLoading(false); // Set loading to false once data is fetched
          }
        }
      },
      (err) => {
        console.log(err);
        setLoading(false); // Set loading to false even if there's an error
      }
    );
  };

  const setGoogleMapRef = (map, maps) => {
    setMap(map);
    setMaps(maps);
  };

  useEffect(() => {
    if (map && maps && markers.length > 0) {
      const markerObjs = markers.map((marker, index) => {
        const markerObj = new maps.Marker({
          position: marker,
          map: map,
          icon: {
            url: ambulancelocate,
            scaledSize: new maps.Size(40, 40),
          },
          title: `Marker ${index + 1}`,
          data: marker.data, // Attach the data to the marker object
        });
        
        // Add click event listener to the marker
        markerObj.addListener("click", () => {
          handleMarkerClick(markerObj.data);
        });

        return markerObj;
      });
      const markerCluster = new MarkerClusterer(
        map,
        markerObjs,
        {
          imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
          minimumClusterSize: 4,
        }
      );
    }
  }, [map, maps, markers]);

  const handleMapClick = (marker) => {
    // Handle map click event if needed
  };

  const handleMarkerClick = (markerData) => {
    console.log("Marker clicked:", markerData);
    props.setcurrentMarker(null);
    setTimeout(() => {
      props.setcurrentMarker(markerData);
    },0);
    // Do something with the marker data, e.g., open an info window
  };

  return (
    <div className="app w-100 h-100">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GoogleMapReact
          bootstrapURLKeys={{
            key:
              "AIzaSyDfnY7GcBdHHFQTxRCSJGR-AGUEUnMBfqo",
          }}
          center={center}
          zoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) =>
            setGoogleMapRef(map, maps)
          }
          onClick={handleMapClick}
        ></GoogleMapReact>
      )}
    </div>
  );
}
