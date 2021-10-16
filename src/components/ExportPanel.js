import React from "react";

import { CsvDownloader } from "./CsvDownloader";
import { DeleteButton } from "./DeleteButton";

export const ExportPanel = ({ waypoints, deleteWaypoints, setDeleteWaypoints }) => {
  return (
    <div>
      <CsvDownloader waypoints={waypoints} />
      <DeleteButton deleteWaypoints={deleteWaypoints} setDeleteWaypoints={setDeleteWaypoints} />
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
