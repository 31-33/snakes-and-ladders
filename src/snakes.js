import React from 'react';
import { Layer, Line, Circle, Group } from 'react-konva';


export default class Snake extends React.Component {
    constructor(props) {
        super(props);
    
      }
    render() {
      /*  const { snake: { startPos, endPos }, board } = this.props;
        const { x: startX, y: startY }; //methodTogetthenumber
        const { x: endX, y: endY }; //Method to get the player cordinates
*/
        return (
            <Group>
                <Line
                    points={[this.props.startX, this.props.startY, this.props.endX, this.props.endY]}
                    stroke="red"
                    lineCap="round"
                    strokeWidth={6}
                    dash={[1, 5]}
                />

            </Group>
        )
    }
}