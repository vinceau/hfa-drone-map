import React from "react";
import { createDownloadableFile } from "../lib/createDownloadableFile";

export const CsvDownloadButton = ({
  waypoints,
  filename = "data.csv",
  contentType = "data:text/csv;charset=utf-8,",
}) => {
  let fileContents = "boatId,waypointNumber,latitude,longitude\n";
  fileContents += waypoints.map((point, i) => `boatId,${i + 1},${point.lat},${point.long}`).join("\n");
  const onClick = () => {
    createDownloadableFile(fileContents, filename, contentType);
  };

  return <button onClick={onClick}>download</button>;
};
