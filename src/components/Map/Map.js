import React from "react";
import ReactMapboxGl, { RotationControl, ScaleControl, ZoomControl } from "react-mapbox-gl";

import { MapDronePoints } from "./MapDronePoints";
import { MapFeatures } from "./MapFeatures";
import { PerspectiveControl } from "./PerspectiveControl";

// eslint-disable-next-line new-cap
const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_KEY,
});

export const MapView = ({
  currentPosition,
  droneLocations,
  onChange,
  waypoints,
  deleteSignal,
  disableWaypointEditing,
}) => {
  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100%",
          width: "100%",
        }}
      >
        <ZoomControl />
        <ScaleControl />
        <RotationControl />
        <PerspectiveControl currentPosition={currentPosition} />
        <MapDronePoints droneLocations={droneLocations} />
        <MapFeatures
          onChange={onChange}
          initialWaypoints={waypoints}
          deleteSignal={deleteSignal}
          disabled={disableWaypointEditing}
        />
      </Map>
    </div>
  );
};
