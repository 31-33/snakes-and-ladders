import React from "react";
import ReactDOM from "react-dom";
import Board from "./board";
import Game from "./game";

import "./styles.css";

function App() {
  const game = new Game(2);
  return (
    <div className="App">
      <Board gameState={game} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
