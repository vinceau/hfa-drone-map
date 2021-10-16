import React from "react";

import styles from "./App.module.css";
import { CsvDownloader } from "./components/CsvDownloader";
import { FileInput } from "./components/FileInput";
import { MapView } from "./components/Map/Map";

function App() {
  const [droneLocations, setDroneLocations] = React.useState([]);
  const [waypoints, setWaypoints] = React.useState([]);

  return (
    <div className={styles.appContainer}>
      <div className={styles.leftPanelContents}>
        <img src={"images/hfa.png"} className={styles.logo} />
        <FileInput onSubmit={setDroneLocations} />
        <CsvDownloader waypoints={waypoints} />
      </div>
      <MapView droneLocations={droneLocations} onChange={setWaypoints} />
    </div>
  );
}

export { App };
