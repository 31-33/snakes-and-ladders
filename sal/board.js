import React, { Component } from "react";
import { Rect, Group, Text, Layer } from "react-konva";
import Tile from "./tile.js";
let WIDTH = 10;

export default class Board extends Component {
  render() {
    return <Layer>{<Tile 
      
      index={0} 
      
      />}</Layer>;
  }
}
