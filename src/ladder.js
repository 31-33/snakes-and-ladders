import React from 'react';
import { Layer, Line, Group } from 'react-konva';


export default class Ladder extends React.Component {
    render() {
       /* const { ladder: { startXPos, endXPos,startYPos, endYPos }, board } = this.props;
        const { x: startXPos, y: startYPos } //getcoordinates for start
        const { x: endXPos, y: endYPos }//getcoordinates for end
*/
        return (
            <Group>
                <Line
                    points={[this.props.startX, this.props.startY, this.props.endX, this.props.endY]}
                    stroke="green"
                    linecap="round"
                    strokeWidth={6}
                    
                />

                
            </Group>
            )
        }
    
        
}