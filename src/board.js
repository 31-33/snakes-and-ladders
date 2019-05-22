import React, { Component } from "react";
import { Rect, Group, Text, Layer } from "react-konva";
import Tile from "./tile.js";

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstTile: '', secondTile: ''
        }
    }

    onTileClick = (tileIndex, tileValue) => {
        if (this.state.firstTile === '') {
            this.setState({
                firstTile: {
                    index: tileIndex,
                    value: tileValue
                }
            })
        }
        else {
            this.setState({
                secondTile: {
                    index: tileIndex,
                    value: tileValue
                }
            })
        }
        console.log(this.state);
    }

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
          x += 50;
        }
      } else {
        for (var column = 1; column <= 10; column++) {
          tiles.push({
            index: row * 10 + column,
            x: x,
            y: y,
          });
          x += 50;
        }
      }
      x = 0;
      y += 50;
    }
    return (
      <Layer>
            {tiles.map(tile => {
                const isRevealed =
                    (this.state.firstTile !== '' && this.state.firstTile.index === tile.index) ||
                    (this.state.secondTile !== '' && this.state.secondTile.index === tile.index)
                return <Tile index={tile.index} key={tile.index} x={tile.x} y={tile.y} gameState={this.props.gameState}
                    onClickCallback={this.onTileClick} isRevealed={isRevealed} />;
        })}
      </Layer>
    );
  }
}
