import Battery20Icon from "@mui/icons-material/Battery20";
import Battery30Icon from "@mui/icons-material/Battery30";
import Battery50Icon from "@mui/icons-material/Battery50";
import Battery60Icon from "@mui/icons-material/Battery60";
import Battery80Icon from "@mui/icons-material/Battery80";
import Battery90Icon from "@mui/icons-material/Battery90";
import BatteryAlert from "@mui/icons-material/BatteryAlert";
import BatteryFull from "@mui/icons-material/BatteryFull";
import BatterySaver from "@mui/icons-material/BatterySaver";
import React from "react";

export const BatteryLevel = ({ percent }) => {
  const BatteryIcon = getBatteryIconFromPercent(percent);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span style={{ color: getBatteryColorFromPercent(percent) }}>
        <BatteryIcon color="inherit" />
      </span>{" "}
      <span>{percent.toFixed(1)}%</span>
    </div>
  );
};

const getBatteryIconFromPercent = (percent) => {
  if (percent < 10) {
    return BatteryAlert;
  }
  if (percent < 20) {
    return BatterySaver;
  }
  if (percent < 30) {
    return Battery20Icon;
  }
  if (percent < 45) {
    return Battery30Icon;
  }
  if (percent < 55) {
    return Battery50Icon;
  }
  if (percent < 65) {
    return Battery60Icon;
  }
  if (percent < 85) {
    return Battery80Icon;
  }
  if (percent < 95) {
    return Battery90Icon;
  }
  return BatteryFull;
};

const getBatteryColorFromPercent = (percent) => {
  if (percent < 15) {
    return "red";
  }
  if (percent < 45) {
    return "orange";
  }
  return "green";
};
