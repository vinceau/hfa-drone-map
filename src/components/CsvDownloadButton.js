import React from "react";
import { createDownloadableFile } from "../lib/createDownloadableFile";

const ROUNDING_ACCURACY = 6;

export const CsvDownloadButton = ({
  waypoints,
  filename = "data.csv",
  contentType = "data:text/csv;charset=utf-8,",
}) => {
  let fileContents = "boatId,waypointNumber,latitude,longitude\n";
  fileContents += waypoints.map((point, i) => generateCsvEntryString("boatId", i, point)).join("\n");
  const onClick = () => {
    createDownloadableFile(fileContents, filename, contentType);
  };

  return <button onClick={onClick}>download</button>;
};

const generateCsvEntryString = (boatId, index, data) => {
  return `${boatId},${index + 1},${data.lat.toFixed(ROUNDING_ACCURACY)},${data.long.toFixed(ROUNDING_ACCURACY)}`;
};
