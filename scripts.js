const tiles = document.querySelectorAll('.tiles');

let hasFlippedCard = false;
let firstCard, secondCard;


function flipTiles() {
    console.log("testing this click");
    console.log(this);
    this.classList.toggle('flip');
}







tiles.forEach(tiles => tiles.addEventListener('click', flipTiles));