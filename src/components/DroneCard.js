import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import { Card, CardContent } from "@mui/material";
import React from "react";

import { getBatteryLevelFromVoltage } from "../lib/batteryPercentageFromVoltage";
import { BatteryLevel } from "./BatteryLevel";
import styles from "./Dronecard.module.css";

export const DroneCard = ({ drone }) => {
  const batLvl = getBatteryLevelFromVoltage(drone.batteryVoltage);
  return (
    <Card variant={"outlined"}>
      <CardContent>
        <div className={styles.droneId}>
          <div>
            {drone.id} <BatteryLevel pc={batLvl} />
          </div>
          <div>
            <LocationSearchingIcon onClick={() => console.log([drone.long, drone.lat])} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
