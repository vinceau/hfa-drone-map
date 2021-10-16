import * as React from "react";

import { DroneCard } from "./DroneCard";

export const DroneList = (props) => {
  const { drones } = props;
  if (!drones) {
    return null;
  }
  return drones.map((drone) => <DroneCard key={drone.id} drone={drone} />);
};
