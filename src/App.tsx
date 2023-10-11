import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppContainer from "./AppContainer";

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  );
};

export default App;
