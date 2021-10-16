import "./index.css";

import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
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
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
