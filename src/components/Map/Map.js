import "mapbox-gl/dist/mapbox-gl.css";

import React from "react";
import ReactMapboxGl from "react-mapbox-gl";

import { MapDronePoints } from "./MapDronePoints";
import { MapFeatures } from "./MapFeatures";

// eslint-disable-next-line new-cap
const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_KEY,
});

export const MapView = ({ droneLocations, onChange }) => {
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

        <MapFeatures onChange={onChange} />
      </Map>
    </div>
  );
};
