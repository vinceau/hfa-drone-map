import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Tooltip from "@mui/material/Tooltip";
import React from "react";

import { mapCsvToPositions } from "../lib/mapCsvToPositions";
import { readFileAsText } from "../lib/readFile";
import styles from "./FileInput.module.css";

const defaultValue = `M,UL997,37.821608S,145.313996E,470668.68,3,3.4
M,UL997,37.821608S,145.313996E,470668.68,3,3.4
P,UL997,12.68,26.3,3.4,41.3,0.0`;

export const FileInput = (props) => {
  const [text, setText] = React.useState(defaultValue);
  const [result, setResult] = React.useState("");

  const onClick = () => {
    const res = mapCsvToPositions(text);
    console.log(res);
    setResult(JSON.stringify(res, null, 2));

    // Return the result to parent
    if (props.onSubmit) {
      props.onSubmit(res);
    }
  };

  const onFileChange = async (e) => {
    const files = e.target.files;
    console.log(files);
    const strings = await Promise.all(Array.from(files).map((f) => readFileAsText(f)));
    setText(strings.join("\n"));
  };

  return (
    <div className={styles.fileInputContainer}>
      <input
        type="file"
        id="fileInput"
        name="fileInput"
        multiple={true}
        onChange={onFileChange}
        className={styles.uploadInput}
      />
      <label htmlFor="fileInput">
        <Tooltip title={"Upload a CSV File"}>
          <Fab component={"span"} color={"primary"}>
            <UploadFileIcon />
          </Fab>
        </Tooltip>
      </label>
      <TextareaAutosize onChange={(e) => setText(e.target.value)}>{text}</TextareaAutosize>
      <Button onClick={onClick}>submit</Button>
      <pre>{result}</pre>
    </div>
  );
};
