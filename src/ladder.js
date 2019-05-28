import React from 'react';
import { Layer, Line } from 'react-konva';
import { styles } from '../styles';

export default class Ladder extends React.Component {
    render() {
        const { ladder: { startXPos, endXPos,startYPos, endYPos }, board } = this.props;
        const { x: startXPos, y: startYPos } //getcoordinates for start
        const { x: endXPos, y: endYPos }//getcoordinates for end

        return (
            <Layer>
                <Line
                    points={[startXPos, startYPos, endXPos, endYPos]}
                    stroke={styles.green}
                    linecap="round"
                    strokeWidth={5}
                    dash={[20, 5]}
                />
                <Line
                    points={[startXPos - 6, startYPos, endXPos - 6, endYPos]}
                    stroke={styles.gray}
                    lineCap="round"
                    strokeWidth={2}
                    dash={[20, 5]}
                    />
                
            </Layer>
            )
        }
    
        
}