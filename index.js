class Stage {
  constructor() {
    this.tileSize = 60;
    this.map = [
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]      
    ];
  }
  draw(ctx) {
    this.map.forEach((row, y) => {
      row.forEach((id, x) => {
        let xpos = x * this.tileSize;
        let ypos = y * this.tileSize;
        ctx.save();
        ctx.beginPath();
        ctx.strokeRect(xpos, ypos, this.tileSize, this.tileSize);
        ctx.fillStyle = id ? "black" : "lightgray";
        ctx.fillRect(xpos, ypos, this.tileSize, this.tileSize);
        ctx.stroke();
        ctx.restore();
      });
    });
  }
}

class SAL {
  constructor() {
    console.log("Canvas Tiles");
    let canvas = document.createElement("canvas");
    let stage = new Stage();
    canvas.width = stage.tileSize * stage.map[0].length;
    canvas.height = stage.tileSize * stage.map.length;
    document.body.appendChild(canvas);
    let ctx = canvas.getContext("2d");
    stage.draw(ctx);
  }
}
new SAL();

