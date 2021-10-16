import React, { useRef } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapFeatures } from "./MapFeatures";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_KEY,
});

const POSITION_CIRCLE_PAINT = {
  "circle-stroke-width": 4,
  "circle-radius": 10,
  "circle-blur": 0.15,
  "circle-color": "#3770C6",
  "circle-stroke-color": "white",
};

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
        <Layer type="circle" id="position-marker" paint={POSITION_CIRCLE_PAINT}>
          {droneLocations.map((loc, index) => (
            <Feature key={index} coordinates={[loc.lat, loc.long]} />
          ))}
        </Layer>

        <MapFeatures onChange={onChange} />
      </Map>
    </div>
  );
};
