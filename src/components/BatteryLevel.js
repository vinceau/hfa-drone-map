import Battery20Icon from "@mui/icons-material/Battery20";
import Battery30Icon from "@mui/icons-material/Battery30";
import Battery50Icon from "@mui/icons-material/Battery50";
import Battery60Icon from "@mui/icons-material/Battery60";
import Battery80Icon from "@mui/icons-material/Battery80";
import Battery90Icon from "@mui/icons-material/Battery90";
import BatteryAlert from "@mui/icons-material/BatteryAlert";
import BatteryFull from "@mui/icons-material/BatteryFull";
import BatterySaver from "@mui/icons-material/BatterySaver";
import BatteryUnknown from "@mui/icons-material/BatteryUnknown";
import { Tooltip } from "@mui/material";
import React from "react";

export const BatteryLevel = ({ pc }) => {
  const lvl = pc < 95 ? Math.floor(pc / 10) : 10;

  let batteryLevel = <BatteryUnknown />;
  switch (lvl) {
    case 0:
      batteryLevel = <BatteryAlert />;
      break;
    case 1:
      batteryLevel = <BatterySaver />;
      break;
    case 2:
      batteryLevel = <Battery20Icon />;
      break;
    case 3:
    case 4:
      batteryLevel = <Battery30Icon />;
      break;
    case 5:
      batteryLevel = <Battery50Icon />;
      break;
    case 6:
    case 7:
      batteryLevel = <Battery60Icon />;
      break;
    case 8:
      batteryLevel = <Battery80Icon />;
      break;
    case 9:
      batteryLevel = <Battery90Icon />;
      break;
    case 10:
      batteryLevel = <BatteryFull />;
      break;
  }
  return <Tooltip title={Math.max(Math.min(pc, 100), 0).toFixed(0) + "%"}>{batteryLevel}</Tooltip>;
};
