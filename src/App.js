import React from "react";

import styles from "./App.module.css";
import { FileInput } from "./FileInput";
import { MapView } from "./Map";

function App() {
  return (
    <div className={styles.appContainer}>
      <FileInput />
      <MapView />
    </div>
  );
}

export { App };
