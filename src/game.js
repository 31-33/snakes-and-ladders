import Konva from "konva";
import { resolveModuleName } from "typescript";

export default class Game {
  constructor(numPlayers) {
    
    this.winner = -1;
    this.snakes = [];
    this.ladders = [];
    this.inactive = [];
    this.playerPositions = [];
    this.activePlayerIndex = 0;
    for (var i = 0; i < numPlayers; i++) {
      this.playerPositions.push(1);
    }
  }

  movePlayer(playerIndex, numSpaces) {
    
    const tileNum = parseInt(numSpaces, 10);
    if (this.playerPositions[playerIndex] + tileNum < 100) {
      this.playerPositions[playerIndex] += tileNum;
    } else if (this.playerPositions[playerIndex] + tileNum >= 100) {
      this.winner = playerIndex;
      if(this.activePlayerIndex == 1){
        this.activePlayerIndex = 0
      }
      else if(this.activePlayerIndex == 0)
      this.activePlayerIndex = 1;
      var win = this.activePlayerIndex + 1
      var sound = document.getElementById("victory");
      sound.play();
      alert("Player " + win + " wins!");
      window.location.reload()

      console.log(this.winner);
    }
    if(this.inactive.length >= 30)
    {
      this.inactive = [];
    }
    
    this.snakes.forEach(snake => {
      if (snake.start === this.playerPositions[playerIndex]) {
        this.playerPositions[playerIndex] = snake.end;
      }
    });
    this.ladders.forEach(ladder => {
      if (ladder.start === this.playerPositions[playerIndex]) {
        this.playerPositions[playerIndex] = ladder.end;
      }
    });
  }



  makeLadder(startPos, endPos) {
    this.ladders.push({
      start: startPos,
      end: endPos
    });
  }
}
