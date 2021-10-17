import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import RoomIcon from "@mui/icons-material/Room";
import WarningIcon from "@mui/icons-material/Warning";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import React from "react";

import { getBatteryLevelFromVoltage } from "../lib/batteryPercentageFromVoltage";
import { BatteryLevel } from "./BatteryLevel";
import styles from "./Dronecard.module.css";

export const DroneCard = ({ drone, onLocationClick, onStartWaypointClick }) => {
  const batLvl = getBatteryLevelFromVoltage(drone.batteryVoltage);
  const locationMissing = drone.long === undefined || drone.lat === undefined;
  return (
    <Card variant={"outlined"}>
      <CardContent style={{ padding: "10px 20px" }}>
        <div className={styles.droneInfoContainer}>
          <div className={styles.droneInfo}>
            <div className={styles.droneName}>
              <DirectionsBoatIcon className={styles.boatIcon} />
              {drone.id}
            </div>
            <BatteryLevel percent={batLvl} />
          </div>
          {locationMissing ? (
            <Tooltip title="This drone has missing data">
              <div style={{ color: "orange" }}>
                <WarningIcon color="inherit" />
              </div>
            </Tooltip>
          ) : (
            <div>
              <Tooltip title="Start a waypoint">
                <IconButton onClick={onStartWaypointClick}>
                  <RoomIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Center on this location">
                <IconButton onClick={onLocationClick}>
                  <LocationSearchingIcon />
                </IconButton>
              </Tooltip>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
