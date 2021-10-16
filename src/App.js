import React from "react";

import styles from "./App.module.css";
import { CsvDownloader } from "./components/CsvDownloader";
import { FileInput } from "./components/FileInput";
import { MapView } from "./components/Map/Map";

function App() {
  const [droneLocations, setDroneLocations] = React.useState([]);
  const [waypoints, setWaypoints] = React.useState([]);
  const [stackedEntries, setStackedEntries] = React.useState("");

  return (
    <div className={styles.appContainer}>
      <div>
        <FileInput onSubmit={setDroneLocations} />
        <CsvDownloader waypoints={waypoints} />
        <pre>{stackedEntries}</pre>
      </div>
      <MapView droneLocations={droneLocations} onChange={setWaypoints} showStackedEntries={setStackedEntries} />
    </div>
  );
}

export { App };
