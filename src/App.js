import React from "react";
import Map from "./Map";
import styles from "./App.module.css";
import { FileInput } from "./FileInput";

function App() {
  return (
    <div className={styles.appContainer}>
      <FileInput />
      <Map />
    </div>
  );
}

export default App;
