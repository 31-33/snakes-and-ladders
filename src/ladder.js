import React from 'react';
import { Layer, Line } from 'react-konva';
import { styles } from '../styles';

export default class Ladder extends React.Component {
    render() {
        const { ladder: { startPos, endPos }, board } = this.props;
        const { x: startX, y: startY } //getcoordinates for start
        const { x: endx, y: endY }//getcoordinates for end

        return (
            <Layer>
                <Line
                    points={[startX, startY, endX, endY]}
                    stroke={styles.green}
                    linecap="round"
                    strokeWidth={5}
                    dash={[20, 5]}
                />
                <Line
                    points={[startX - 6, startY, endX - 6, endY]}
                    stroke={styles.gray}
                    lineCap="round"
                    strokeWidth={2}
                    dash={[20, 5]}
                    />
                
            </Layer>
            )
        }
    
        
}