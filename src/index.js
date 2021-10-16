import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#272264",
    },
    secondary: {
      main: "#a7b1b8",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
