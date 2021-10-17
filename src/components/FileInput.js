import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useSnackbar } from "notistack";
import React from "react";

import { mapCsvToPositions } from "../lib/mapCsvToPositions";
import { readFileAsText } from "../lib/readFile";
import { DroneList } from "./DroneList";
import styles from "./FileInput.module.css";

export const FileInput = ({ onSubmit, text, setText, setCurrentPosition, setStartingWaypoint }) => {
  const [result, setResult] = React.useState("");
  const { enqueueSnackbar } = useSnackbar();

  const inputFile = React.useRef(null);

  const onFileUploadClick = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };

  const onClick = () => {
    const { values, errors } = mapCsvToPositions(text);
    console.log(values);

    if (errors.length > 0) {
      enqueueSnackbar(`Missing data for drone(s): ${errors.join(", ")}`, {
        variant: "warning",
      });
    }
    setResult(values);

    // Return the result to parent
    if (onSubmit) {
      onSubmit(values);
    }
  };

  const onFileChange = async (e) => {
    const files = e.target.files;
    console.log(files);
    const strings = await Promise.all(Array.from(files).map((f) => readFileAsText(f)));
    setText(strings.join("\n"));
  };

  React.useEffect(() => {
    onClick();
  }, [text]);

  return (
    <div className={styles.fileInputContainer}>
      <input
        type="file"
        id="fileInput"
        name="fileInput"
        ref={inputFile}
        multiple={true}
        onChange={onFileChange}
        className={styles.uploadInput}
      />
      <div className={styles.buttonBar}>
        <Button onClick={onFileUploadClick} variant="contained" color="secondary">
          Import CSV
        </Button>
        <Button
          onClick={() => {
            onSubmit([]);
            setResult("");
          }}
          variant="contained"
          color="error"
        >
          Clear
        </Button>
        <Button onClick={onClick} variant="contained" color="primary">
          Show Drones
        </Button>
      </div>
      <TextareaAutosize
        className={styles.textarea}
        minRows={20}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <DroneList drones={result} setCurrentPosition={setCurrentPosition} setStartingWaypoint={setStartingWaypoint} />
    </div>
  );
};
