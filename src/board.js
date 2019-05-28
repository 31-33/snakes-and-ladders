import React, { Component } from "react";
import { Rect, Group, Text, Layer } from "react-konva";
import Tile from "./tile.js";
import WIDTH from "./tile";
import Game from './game';
import Konva from "konva";


export default class Board extends Component {

  
  
    constructor(props) {
        super(props);
        this.state = {
            reset: 0,
            firstTile: '',
            secondTile: '',
            gameState: new Game(2),
        }
    }
    

    onTileClick = (tileIndex, tileValue) => {


      
        if (this.state.firstTile === '') {

            this.setState({
               
                firstTile: {
                    index: tileIndex,
                    value: tileValue,

                    
                }
            }
            )
            
        }
        else {
            this.setState({
                secondTile: {
                    
                    index: tileIndex,
                    value: tileValue
                }
            });
            setTimeout(() => {
              //If they match
                if (this.state.firstTile.value === this.state.secondTile.value) {
                    this.state.gameState.movePlayer(this.state.gameState.activePlayerIndex, this.state.firstTile.value);
                    var sound = document.getElementById("audio");
                    sound.play();

                    this.state.gameState.inactive.push(this.state.firstTile.index);
                    this.state.gameState.inactive.push(this.state.secondTile.index);






                    console.log('match')
                }
                

                
                this.setState({firstTile: '', secondTile: ''})
                
            }, 1000
            
            );

            if(this.state.gameState.activePlayerIndex == 1){
              this.state.gameState.activePlayerIndex = 0
            }
            else if(this.state.gameState.activePlayerIndex == 0)
            this.state.gameState.activePlayerIndex = 1


            var sound = document.getElementById("urturn");
            sound.play();



        }
        console.log(this.state);

        


    }

  
    makeLadder(startXPos, endXPos, startYpos, endYpos) {
      this.ladders.push({
        start: startXPos,
      });
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
          x += 90;
        }
      } else {
        for (var column = 1; column <= 10; column++) {
          tiles.push({
            index: row * 10 + column,
            x: x,
            y: y,
          });
          x += 90;
        }
      }
      x = 0;
      y += 90;
    }
    return (    
      <Layer>
            {tiles.map(tile => { 
                const isRevealed =
                    (this.state.firstTile !== '' && this.state.firstTile.index === tile.index) ||
                    (this.state.secondTile !== '' && this.state.secondTile.index === tile.index)

                return <Tile index={tile.index} key={tile.index} x={tile.x} y={tile.y} gameState={this.state.gameState}
                    onClickCallback={this.onTileClick} isRevealed={isRevealed} />;
                    
        })}
      </Layer>    
    );
  }
}
