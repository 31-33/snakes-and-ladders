import React from "react";
import ReactDOM from "react-dom";
import Board from "./board";
import Game from "./game";
import {Stage} from 'react-konva';
import WIDTH from "./tile";
import "./styles.css";

function App() {
  const game = new Game(2);
  return (
    <Stage height = {900} width = {900}>
      <Board gameState={game} />
    </Stage>
  );
}




const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
