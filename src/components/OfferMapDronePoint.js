import React from "react";

import Button from "@mui/material/Button";

export const OfferMapDronePoint = ({ droneLocations, setWaypoints, exportMode }) => {
  return (
    <Button
      onClick={() => {
        setWaypoints([droneLocations[0]]);
        exportMode();
      }}
      variant="contained"
      color="primary"
    >
      Start Creating Waypoints from First Drone
    </Button>
  );
};
