import "./App.scss";

import React from "react";
import { hot } from "react-hot-loader/root";

const env = process.env.REACT_APP_TEST_KEY;
console.log("env: ", env);

const App: React.FC = () => {
  return (
    <div className="App">
      <div>Hello world! {env}</div>
    </div>
  );
};

export default hot(App);
