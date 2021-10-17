import DownloadIcon from "@mui/icons-material/Download";
import Button from "@mui/material/Button";
import React from "react";

import { createDownloadableFile } from "../lib/createDownloadableFile";

const ROUNDING_ACCURACY = 6;

export const CsvDownloadButton = ({
  boatId,
  waypoints,
  disabled = false,
  filename = "data.csv",
  contentType = "data:text/csv;charset=utf-8,",
}) => {
  const onClick = () => {
    let fileContents = "boatId,waypointNumber,latitude,longitude\n";
    fileContents += waypoints.map((point, i) => generateCsvEntryString(boatId, i, point)).join("\n");
    createDownloadableFile(fileContents, filename, contentType);
  };

  return (
    <Button disabled={disabled} onClick={onClick} variant="contained" endIcon={<DownloadIcon />}>
      Export
    </Button>
  );
};

const generateCsvEntryString = (boatId, index, data) => {
  return `${boatId},${index + 1},${data.lat.toFixed(ROUNDING_ACCURACY)},${data.long.toFixed(ROUNDING_ACCURACY)}`;
};
