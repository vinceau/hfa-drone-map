import React from "react";

import styles from "./App.module.css";
import { CsvDownloadButton } from "./components/CsvDownloadButton";
import { FileInput } from "./components/FileInput";
import { MapView } from "./components/Map/Map";

function App() {
  const [droneLocations, setDroneLocations] = React.useState([]);
  const [waypoints, setWaypoints] = React.useState([]);

  return (
    <div className={styles.appContainer}>
      <div>
        <FileInput onSubmit={setDroneLocations} />
        <CsvDownloadButton waypoints={waypoints} />
      </div>
      <MapView droneLocations={droneLocations} onChange={setWaypoints} />
    </div>
  );
}

export { App };
