import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import React from "react";

import { getBatteryLevelFromVoltage } from "../lib/batteryPercentageFromVoltage";
import { BatteryLevel } from "./BatteryLevel";
import styles from "./Dronecard.module.css";

export const DroneCard = ({ drone, onLocationClick }) => {
  const batLvl = getBatteryLevelFromVoltage(drone.batteryVoltage);
  const locationMissing = drone.long === undefined || drone.lat === undefined;
  return (
    <Card variant={"outlined"}>
      <CardContent>
        <div className={styles.droneId}>
          <div className={locationMissing ? styles.locationMissing : ""}>
            <DirectionsBoatIcon className={styles.boatIcon} />
            {drone.id} <BatteryLevel pc={batLvl} />
          </div>
          {!locationMissing && (
            <Tooltip title="Center on this location" placement="top">
              <IconButton onClick={onLocationClick}>
                <LocationSearchingIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
