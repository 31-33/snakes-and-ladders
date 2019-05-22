import React from "react";
import ReactDOM from "react-dom";
import Board from "./board";
import Game from "./game";
import {Stage} from 'react-konva';

import "./styles.css";

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            gameState: new Game(2),
        }
    }

    render() {
        return (
            <Stage height={500} width={500}>
                <Board gameState={this.state.gameState} />
            </Stage>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
