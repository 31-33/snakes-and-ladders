import React from "react";
import ReactDOM from "react-dom";
import Board from "./board";
import Game from "./game";
import {Stage} from 'react-konva';
import WIDTH from "./tile";
import "./styles.css";

export default class App extends React.Component {
    constructor() {

        super();


    }

    render() {
        return (

            <Stage height={900} width={900}>
                <Board />
            </Stage>
            
            
        );
    }
}




const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
