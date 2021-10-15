import "./App.scss";
import "mapbox-gl/dist/mapbox-gl.css";

import React from "react";
import { Map } from "./Map";
import { hot } from "react-hot-loader/root";

const env = process.env.REACT_APP_TEST_KEY;
console.log("env: ", env);

const App: React.FC = () => {
  return (
    <div className="App">
      <div>Hello world! {env}</div>
      <Map />
    </div>
  );
};

export default hot(App);
