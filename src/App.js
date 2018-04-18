import React, { Component } from "react";

import Header from "./components/Header";
import Forecast from "./components/Forecast";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Forecast />
      </div>
    );
  }
}

export default App;
