import React from "react";

import Button from "@mui/material/Button";

export const DeleteButton = ({ deleteWaypoints, setDeleteWaypoints }) => {
  return (
    <Button
      onClick={() => {
        if (window.confirm("Are you sure you wish to delete these waypoints?")) {
          // toggling this value causes the MapFeatures to reload, deleting the waypoints
          setDeleteWaypoints(!deleteWaypoints);
        }
      }}
      variant="contained"
      color="error"
    >
      Delete
    </Button>
  );
};
