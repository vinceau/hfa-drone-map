import React from "react";

import styles from "./App.module.css";
import { CsvDownloader } from "./components/CsvDownloader";
import { FileInput } from "./components/FileInput";
import { MapView } from "./components/Map/Map";
import { Sidebar } from "./components/Sidebar";
import { DeleteButton } from "./components/DeleteButton";
import { OfferMapDronePoint } from "./components/OfferMapDronePoint";

function App() {
  const [pane, setPane] = React.useState(0);
  const [droneLocations, setDroneLocations] = React.useState([]);
  const [waypoints, setWaypoints] = React.useState([]);
  const [deleteSignal, sendDeleteSignal] = React.useState(false);

  return (
    <div className={styles.appContainer}>
      <Sidebar
        currentIndex={pane}
        setCurrentIndex={setPane}
        panels={[
          {
            label: "Import",
            contents: (
              <div>
                <OfferMapDronePoint
                  droneLocations={droneLocations}
                  setWaypoints={setWaypoints}
                  exportMode={() => setPane(1)}
                />
                <FileInput onSubmit={setDroneLocations} />
              </div>
            ),
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
                <DeleteButton
                  deleteSignal={deleteSignal}
                  sendDeleteSignal={sendDeleteSignal}
                  setWaypoints={setWaypoints}
                />
              </div>
            ),
          },
        ]}
      />
      <MapView
        droneLocations={droneLocations}
        onChange={setWaypoints}
        disableWaypointEditing={pane === 0}
        waypoints={waypoints}
        deleteSignal={deleteSignal}
      />
    </div>
  );
}

export { App };
