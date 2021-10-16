import React from "react";

import styles from "./App.module.css";
import { FileInput } from "./FileInput";
import { MapView } from "./Map/Map";

function App() {
  const [droneLocations, setDroneLocations] = React.useState([]);
  const [waypoints, setWaypoints] = React.useState('');
  const onSubmit = (res) => setDroneLocations(res);
  const onChange = React.useCallback((res) => {
    setWaypoints(JSON.stringify(res))
  },[waypoints])  

  return (
    <div className={styles.appContainer}>
      <div>
        <pre> {JSON.stringify(waypoints, null, 2)} </pre>
        <FileInput onSubmit={onSubmit} />
      </div>
      <MapView droneLocations={droneLocations} onChange={onChange} />
    </div>
  );
}

export { App };
