import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapFeatures } from "./MapFeatures";
import { MapDronePoints } from "./MapDronePoints";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_KEY,
});

export const MapView = ({ droneLocations }) => {
  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100%",
          width: "100%",
        }}
      >
        <MapDronePoints droneLocations={droneLocations} />

        <MapFeatures />
      </Map>
    </div>
  );
};
