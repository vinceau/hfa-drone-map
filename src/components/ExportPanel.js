import React from "react";

import { ClearWaypointsButton } from "./ClearWaypointsButton";
import { CsvDownloader } from "./CsvDownloader";

export const ExportPanel = ({ waypoints, deleteSignal, sendDeleteSignal, setWaypoints }) => {
  return (
    <div>
      <CsvDownloader waypoints={waypoints} />
      <ClearWaypointsButton
        deleteSignal={deleteSignal}
        sendDeleteSignal={sendDeleteSignal}
        setWaypoints={setWaypoints}
      />
      <div>
        {waypoints.length === 0 ? (
          <span>No waypoints selected</span>
        ) : (
          <ol style={{ listStyle: "decimal" }}>
            {waypoints.map((waypoint, i) => {
              return <li key={i}>{`[${waypoint.long}, ${waypoint.lat}]`}</li>;
            })}
          </ol>
        )}
      </div>
    </div>
  );
};
