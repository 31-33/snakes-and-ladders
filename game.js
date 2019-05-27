import Konva from "konva";

export default class Game {
  constructor(numPlayers) {
    this.winner = -1;
    this.snakes = [];
    this.ladders = [];
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
