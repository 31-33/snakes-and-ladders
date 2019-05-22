import React, { Component } from "react";
import { Rect, Group, Text } from "react-konva";

let WIDTH = 25;

class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: Math.ceil(Math.random() * 6)
    };
  }

  render() {
    return (
      <Group key={this.props.index}>
        <Rect
          x={0}
          y={0}
          width={WIDTH}
          height={WIDTH}
          fill={this.props.index % 2 === 0 ? "white" : "black"}
        />
        <Text x={0} y={0} text={this.props.index} />
      </Group>
    );
  }
}
export default Tile;
