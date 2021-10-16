import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import React from "react";

export const ClearWaypointsButton = ({ deleteSignal, sendDeleteSignal, setWaypoints }) => {
  return (
    <Button
      onClick={() => {
        if (window.confirm("Are you sure you wish to delete these waypoints?")) {
          // toggling this value causes the MapFeatures to reload, deleting the waypoints
          setWaypoints([]);
          sendDeleteSignal(!deleteSignal);
        }
      }}
      variant="contained"
      color="error"
      endIcon={<DeleteIcon />}
    >
      Clear waypoints
    </Button>
  );
};
