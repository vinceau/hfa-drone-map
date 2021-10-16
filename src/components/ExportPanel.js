import React from "react";

import { ClearWaypointsButton } from "./ClearWaypointsButton";
import { CsvDownloader } from "./CsvDownloader";
import { WaypointsList } from "./WaypointsList";

export const ExportPanel = ({ waypoints, deleteSignal, sendDeleteSignal, setWaypoints }) => {
  return (
    <div>
      <CsvDownloader waypoints={waypoints} />
      <ClearWaypointsButton
        deleteSignal={deleteSignal}
        sendDeleteSignal={sendDeleteSignal}
        setWaypoints={setWaypoints}
      />
      <WaypointsList waypoints={waypoints} />
    </div>
  );
};
