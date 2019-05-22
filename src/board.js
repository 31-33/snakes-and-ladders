import React, { Component } from "react";
import { Rect, Group, Text, Layer } from "react-konva";
import Tile from "./tile.js";

export default class Board extends Component {
  render() {
    const tiles = [];
    for (var row = 9; row >= 0; row--) {
      if (row % 2 === 1) {
        for (var column = 10; column > 0; column--) {
          tiles.push(row * 10 + column);
        }
      } else {
        for (var column = 1; column <= 10; column++) {
          tiles.push(row * 10 + column);
        }
      }
    }
    return (
      <Layer>
        {tiles.map(index => {
          return <Tile index={index} gameState={this.props.gameState} />;
        })}
      </Layer>
    );
  }
}
