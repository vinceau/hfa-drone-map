import React from "react";

import styles from "./App.module.css";
import { ExportPanel } from "./components/ExportPanel";
import { FileInput } from "./components/FileInput";
import { MapView } from "./components/Map/Map";
import { Sidebar } from "./components/Sidebar";

const defaultValue = `M,UL997,37.821608S,145.313996E,470668.68,3,3.4\nP,UL997,12.68,26.3,3.4,41.3,0.0`;

function App() {
  const [pane, setPane] = React.useState(0);
  const [text, setText] = React.useState(defaultValue);
  const [drones, setDrones] = React.useState("");
  const [currentPosition, setCurrentPosition] = React.useState({ lat: -37.8136, long: 144.9631 });
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
                <FileInput
                  onSubmit={setDroneLocations}
                  text={text}
                  setText={setText}
                  drones={drones}
                  setDrones={setDrones}
                  setCurrentPosition={setCurrentPosition}
                  setStartingWaypoint={(drone) => {
                    if (drone.long && drone.lat) {
                      setWaypoints([drone]);
                      setPane(1);
                    }
                  }}
                />
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
        droneLocations={pane === 0 ? droneLocations : []}
        currentPosition={currentPosition}
        onChange={setWaypoints}
        disableWaypointEditing={pane === 0}
        waypoints={waypoints}
        deleteSignal={deleteSignal}
      />
    </div>
  );
}

export { App };
