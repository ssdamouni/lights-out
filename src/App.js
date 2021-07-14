import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Exo+2:200i" rel="stylesheet"></link>
      <h2>Lights Out!</h2>
      <Board nrows={3} ncols={3} chanceLightStartsOn={0.5}/>
    </div>
  );
}

export default App;
