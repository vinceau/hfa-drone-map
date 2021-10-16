import React from "react";

import styles from "./App.module.css";
import { ExportPanel } from "./components/ExportPanel";
import { FileInput } from "./components/FileInput";
import { MapView } from "./components/Map/Map";
import { OfferMapDronePoint } from "./components/OfferMapDronePoint";
import { Sidebar } from "./components/Sidebar";

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
              <ExportPanel
                waypoints={waypoints}
                deleteSignal={deleteSignal}
                sendDeleteSignal={sendDeleteSignal}
                setWaypoints={setWaypoints}
              />
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
