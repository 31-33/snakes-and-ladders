import React, { Component } from "react";
import { Rect, Group, Text, Layer } from "react-konva";
import Tile from "./tile.js";
import WIDTH from "./tile";

export default class Board extends Component {
  render() {

    const tiles = [];
    var x = 0;
    var y = 0;
    for (var row = 9; row >= 0; row--) {
      if (row % 2 === 1) {
        for (var column = 10; column > 0; column--) {
          tiles.push({
            index: row * 10 + column,
            x: x,
            y: y,
          });
          x += 90;
        }
      } else {
        for (var column = 1; column <= 10; column++) {
          tiles.push({
            index: row * 10 + column,
            x: x,
            y: y,
          });
          x += 90;
        }
      }
      x = 0;
      y += 90;
    }
    return (
      <Layer>
        {tiles.map(tile => {
          return <Tile index={tile.index} key = {tile.index} x={tile.x} y={tile.y} gameState={this.props.gameState} />;
        })}
      </Layer>
    );
  }
}
