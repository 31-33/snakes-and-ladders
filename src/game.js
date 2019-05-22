export default class Game {
  constructor(numPlayers) {
    this.winner = -1;
    this.snakes = [];
    this.ladders = [];
    this.playerPositions = [];
    for (var i = 0; i < numPlayers; i++) {
      this.playerPositions.push(2);
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

  makeSnake(startPos, endPos) {
    this.snakes.push({
      start: startPos,
      end: endPos
    });
  }

  makeLadder(startPos, endPos) {
    this.ladders.push({
      start: startPos,
      end: endPos
    });
  }
}
