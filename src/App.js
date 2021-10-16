import React from "react";

import styles from "./App.module.css";
import { ExportPanel } from "./components/ExportPanel";
import { FileInput } from "./components/FileInput";
import { MapView } from "./components/Map/Map";
import { Sidebar } from "./components/Sidebar";
import { useSnackbar } from "notistack";

function App() {
  const [pane, setPane] = React.useState(0);
  const [droneLocations, setDroneLocations] = React.useState([]);
  const [waypoints, setWaypoints] = React.useState([]);
  const [deleteWaypoints, setDeleteWaypoints] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleSnackbarClick = () => {
    enqueueSnackbar("I am a message");
  };

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
                <button onClick={handleSnackbarClick}>show a notification</button>
                <FileInput onSubmit={setDroneLocations} />
              </div>
            ),
          },
          {
            label: "Export",
            contents: (
              <ExportPanel
                waypoints={waypoints}
                deleteWaypoints={deleteWaypoints}
                setDeleteWaypoints={setDeleteWaypoints}
              />
            ),
          },
        ]}
      />
      <MapView
        droneLocations={droneLocations}
        onChange={setWaypoints}
        disableWaypointEditing={pane === 0}
        deleteWaypoints={deleteWaypoints}
      />
    </div>
  );
}

export { App };
