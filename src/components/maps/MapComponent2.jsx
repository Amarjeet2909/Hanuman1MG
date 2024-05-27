import React from "react";
import {
  APIProvider,
  AdvancedMarker,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";
import { ambulancelocate } from "../../assets";

const MapComponent2 = () => {
  const locations = [
    { id: 1, lat: 53.54, lng: 10 },
    { id: 2, lat: 21.144929014553384, lng: 79.1068667807851 },
    // Add more locations as needed
  ];

  return (
    <APIProvider apiKey={"AIzaSyCCeRvK-UDV4g__w4tx3HXyrTQ92V6emMY"}>
      <Map
        center={{ lat: 21.149918163928497, lng: 78.98599731639877 }}
        defaultZoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId={"0NJaEQ3hremaHvggUtD4"}
      >
        <AdvancedMarker position={{ lat: 53.54, lng: 10 }}>
          <img
            src={ambulancelocate}
            alt="Custom Marker"
            style={{ width: "32px", height: "32px" }} // Set the size of your image
          />
        </AdvancedMarker>

        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            animation={window.google.maps.Animation.DROP}
            draggable={true}
            onClick={() => alert("ji")}
          />
        ))}
      </Map>
    </APIProvider>
  );
};

export default MapComponent2;
