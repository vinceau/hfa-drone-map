import React from "react";

import styles from "./App.module.css";
import { CsvDownloader } from "./components/CsvDownloader";
import { FileInput } from "./components/FileInput";
import { Sidebar } from "./components/Sidebar";
import { MapView } from "./components/Map/Map";

function App() {
  const [pane, setPane] = React.useState(0);
  const [droneLocations, setDroneLocations] = React.useState([]);
  const [waypoints, setWaypoints] = React.useState([]);

  return (
    <div className={styles.appContainer}>
      <Sidebar
        currentIndex={pane}
        setCurrentIndex={setPane}
        panels={[
          {
            label: "Import",
            contents: <FileInput onSubmit={setDroneLocations} />,
          },
          {
            label: "Export",
            contents: (
              <div>
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
                <CsvDownloader waypoints={waypoints} />
              </div>
            ),
          },
        ]}
      />
      <MapView droneLocations={droneLocations} onChange={setWaypoints} disableWaypointEditing={pane === 0} />
    </div>
  );
}

export { App };
