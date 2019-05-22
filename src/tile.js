import React, { Component } from "react";
import { Rect, Group, Text } from "react-konva";
import Player from "./Players"

export const WIDTH = 90;

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
                fill={iseven ? "white" : "black"}
                onClick={() => this.props.onClickCallback(this.props.index, this.state.val)} />

        {isPlayer1Here ? (
                <Player color="red" x={this.props.x + 20} y={this.props.y + 20} gameState={this.props.gameState} playerIndex={0} />
        ): <Text x={this.props.x + 3} y={this.props.y +3} text={this.props.index} fontSize={20} fill = {iseven? "black" : "white"} />}
            {isPlayer2Here ? (
                <Player color="blue" x={this.props.x + 20} y={this.props.y + 70} gameState={this.props.gameState} playerIndex={1} />
        ): <Text x={this.props.x + 3} y={this.props.y + 3} text={this.props.index} fontSize={20} fill = {iseven? "black" : "white"} />}
        
      </Group>
    );
  }
}
export default Tile;
