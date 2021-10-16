import Battery20Icon from "@mui/icons-material/Battery20";
import Battery30Icon from "@mui/icons-material/Battery30";
import Battery50Icon from "@mui/icons-material/Battery50";
import Battery60Icon from "@mui/icons-material/Battery60";
import Battery80Icon from "@mui/icons-material/Battery80";
import Battery90Icon from "@mui/icons-material/Battery90";
import BatteryAlert from "@mui/icons-material/BatteryAlert";
import BatterySaver from "@mui/icons-material/BatterySaver";
import BatteryUnknown from "@mui/icons-material/BatteryUnknown";
import React from "react";

export const BatteryLevel = ({ pc }) => {
  const lvl = pc < 95 ? Math.floor(pc / 10) : 10;
  switch (lvl) {
    case 0:
      return <BatteryAlert />;
    case 1:
      return <BatterySaver />;
    case 2:
      return <Battery20Icon />;
    case 3:
    case 4:
      return <Battery30Icon />;
    case 5:
      return <Battery50Icon />;
    case 6:
    case 7:
      return <Battery60Icon />;
    case 8:
      return <Battery80Icon />;
    case 9:
      return <Battery90Icon />;
    case 10:
      return <Battery50Icon />;
  }
  return <BatteryUnknown />;
};
