import Button from "@mui/material/Button";
import React from "react";

export const OfferMapDronePoint = ({ droneLocations, setWaypoints, exportMode }) => {
  return (
    <Button
      onClick={() => {
        if (droneLocations.length > 0) {
          setWaypoints([droneLocations[0]]);
          exportMode();
        }
      }}
      variant="contained"
      color="primary"
    >
      Start Creating Waypoints from First Drone
    </Button>
  );
};
