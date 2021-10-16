import React from "react";

import styles from "./App.module.css";
import { FileInput } from "./FileInput";
import { MapView } from "./Map/Map";

function App() {
  const [droneLocations, setDroneLocations] = React.useState([]);
  const onSubmit = (res) => setDroneLocations(res);

  return (
    <div className={styles.appContainer}>
      <FileInput onSubmit={onSubmit} />
      <MapView droneLocations={droneLocations} />
    </div>
  );
}

export { App };
