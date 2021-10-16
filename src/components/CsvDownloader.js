import React from "react";
import { CsvDownloadButton } from "./CsvDownloadButton";

export const CsvDownloader = ({ waypoints }) => {
  const [text, setText] = React.useState("");

  return (
    <div>
      <input placeholder="Boat ID" value={text} onChange={(e) => setText(e.target.value)} />
      <CsvDownloadButton disabled={!text || waypoints.length === 0} boatId={text} waypoints={waypoints} />
    </div>
  );
};
