import React from "react";

import styles from "./App.module.css";
import { CsvDownloader } from "./components/CsvDownloader";
import { DeleteButton } from "./components/DeleteButton";
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
                <DeleteButton deleteWaypoints={deleteWaypoints} setDeleteWaypoints={setDeleteWaypoints} />
              </div>
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
