import React from 'react';
import { Layer, Line, Circle } from 'react-konva';
import { getPlayerCoordinates } from '../config/utils';
import { styles } from '../styles';

export default class Snake extends React.Component {
    render() {
        const { snake: { startPos, endPos }, board } = this.props;
        const { x: startX, y: startY }; //methodTogetthenumber
        const { x: endX, y: endY }; //Method to get the player cordinates

        return (
            <Layer>
                <Line
                    points={[startX, startY, endX, endY]}
                    stroke={styles.red}
                    lineCap="round"
                    strokeWidth={4}
                    dash={[1, 5]}
                />
                <Circle
                    x={startX}
                    y={startY}
                    radius={5}
                    fill={styles.red}
                />
            </Layer>
        )
    }
}