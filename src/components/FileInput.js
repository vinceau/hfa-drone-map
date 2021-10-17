import SendIcon from "@mui/icons-material/Send";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useSnackbar } from "notistack";
import React from "react";

import { mapCsvToPositions } from "../lib/mapCsvToPositions";
import { readFileAsText } from "../lib/readFile";
import { DroneList } from "./DroneList";
import styles from "./FileInput.module.css";

const defaultValue = `M,UL997,37.821608S,145.313996E,470668.68,3,3.4
P,UL997,12.68,26.3,3.4,41.3,0.0`;

export const FileInput = (props) => {
  const [text, setText] = React.useState(defaultValue);
  const [result, setResult] = React.useState("");
  const { enqueueSnackbar } = useSnackbar();

  const inputFile = React.useRef(null);

  const onFileUploadClick = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };

  const onClick = () => {
    const { values, errors, where, messages } = mapCsvToPositions(text);
    console.log(values);

    if (errors > 0) {
      for (var index = 0; index < where.length; index++) {
        enqueueSnackbar("Warning message: Please import missing data for drone " + where[index], {
          variant: "warning",
        });
      }
    }
    setResult(values);

    // Return the result to parent
    if (props.onSubmit) {
      props.onSubmit(values);
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
        ref={inputFile}
        multiple={true}
        onChange={onFileChange}
        className={styles.uploadInput}
      />
      <div className={styles.buttonBar}>
        <Button onClick={onFileUploadClick} endIcon={<UploadFileIcon />} variant="contained" color="secondary">
          Upload CSV
        </Button>
        <Button onClick={onClick} variant="contained" color="primary" endIcon={<SendIcon />}>
          Submit
        </Button>
      </div>
      <TextareaAutosize
        className={styles.textarea}
        minRows={20}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <DroneList drones={result} setCurrentPosition={props.setCurrentPosition} />
    </div>
  );
};
