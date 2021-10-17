import * as React from "react";

import { DroneCard } from "./DroneCard";

export const DroneList = (props) => {
  const { drones, setCurrentPosition } = props;
  if (!drones) {
    return null;
  }
  const setLocation = ({ lat, long }) => {
    if (setCurrentPosition) {
      setCurrentPosition({ lat, long });
    }
  };
  return drones.map((drone) => <DroneCard key={drone.id} drone={drone} onLocationClick={() => setLocation(drone)} />);
};
