import React, { Component } from "react";
import { Rect, Group, Text } from "react-konva";
import Player from "./Players"

let WIDTH = 50;

class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: Math.ceil(Math.random() * 6)
    };
  }

  render() {
    const iseven = this.props.index % 2 === 0
    const isPlayer1Here = this.props.gameState.playerPositions[0] === this.props.index;
    const isPlayer2Here = this.props.gameState.playerPositions[1] === this.props.index;

    return (
      <Group key={this.props.index}>
        <Rect
                x={this.props.x}
                y={this.props.y}
                width={WIDTH}
                height={WIDTH}
                stroke="black"
                fill={this.props.isRevealed ? "white" : "black"}
                onClick={() => this.props.onClickCallback(this.props.index, this.state.val)} />

        {isPlayer1Here ? (
          <Player color="red" x={this.props.x + 10}  y={this.props.y + 10}  />
        ): <Text x={this.props.x} y={this.props.y} text={this.props.index} fill = {iseven? "black" : "white"} />}
        {isPlayer2Here ? (
          <Player color="blue" x={this.props.x + 30} y={this.props.y + 30} />
        ): <Text x={this.props.x} y={this.props.y} text={this.props.index} fill = {iseven? "black" : "white"} />}
        
      </Group>
    );
  }
}
export default Tile;
