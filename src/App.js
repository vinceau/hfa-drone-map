import React from "react";
import Map from "./Map";
import styles from "./App.module.css";
import { FileInput } from "./FileInput";

function App() {
  const [droneLocations, setDroneLocations] = React.useState([]);
  const onSubmit = (res) => setDroneLocations(res);

  return (
    <div className={styles.appContainer}>
      <FileInput onSubmit={onSubmit} />
      <Map droneLocations={droneLocations} />
    </div>
  );
}

export default App;
