import React from "react";
import { mapCsvToPositions } from "./lib/mapCsvToPositions";
import styles from "./FileInput.module.css";
import { readFileAsText } from "./lib/readFile";

const defaultValue = `M,UL997,37.821608S,145.313996E,470668.68,3,3.4
P,UL997,12.68,26.3,3.4,41.3,0.0`;

export const FileInput = () => {
  const [text, setText] = React.useState(defaultValue);
  const [result, setResult] = React.useState("");

  const onClick = () => {
    const res = mapCsvToPositions(text);
    console.log(res);
    setResult(JSON.stringify(res, null, 2));
  };

  const onFileChange = async (e) => {
    const files = e.target.files;
    console.log(files);
    const strings = await Promise.all(Array.from(files).map((f) => readFileAsText(f)));
    setText(strings.join("\n"));
  };

  return (
    <div className={styles.fileInputContainer}>
      <label htmlFor="fileInput">Select a CSV file:</label>
      <input type="file" id="fileInput" name="fileInput" multiple={true} onChange={onFileChange} />
      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={20} />
      <button onClick={onClick}>submit</button>
      <pre>{result}</pre>
    </div>
  );
};
