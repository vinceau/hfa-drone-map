import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import { Card, CardContent } from "@mui/material";
import React from "react";

import styles from "./Dronecard.module.css";

export const DroneCard = ({ drone }) => {
  return (
    <Card variant={"outlined"}>
      <CardContent>
        <div className={styles.droneId}>
          <div>{drone.id}</div>
          <div>
            <LocationSearchingIcon onClick={() => console.log([drone.long, drone.lat])} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
