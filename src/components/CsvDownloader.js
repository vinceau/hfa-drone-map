import InputBase from "@mui/material/InputBase";
import React from "react";

import { CsvDownloadButton } from "./CsvDownloadButton";
import styles from "./CsvDownloader.module.css";

export const CsvDownloader = ({ waypoints }) => {
  const [text, setText] = React.useState("");

  return (
    <div className={styles.csvDownloaderContainer}>
      <InputBase
        className={styles.input}
        placeholder="Boat ID"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <CsvDownloadButton disabled={!text || waypoints.length === 0} boatId={text} waypoints={waypoints}>
        Download
      </CsvDownloadButton>
    </div>
  );
};
