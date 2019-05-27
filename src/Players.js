import React from 'react';
import {Circle} from 'react-konva';


export default class Player extends React.Component {
  render () {


    return (
        <Circle radius={15} x={this.props.x} y={this.props.y} fill={this.props.color}
            stroke={this.props.gameState.activePlayerIndex === this.props.playerIndex ? '': 'yellow'} />
    )
  }
}