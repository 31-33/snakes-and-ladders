const Btiles = document.querySelectorAll('.Btiles');
const Wtiles = document.querySelectorAll('.Wtiles');

let hasFlippedTiles = false;
let lockBoard = false;
let firstTile, secondTiles;


function flipTiles() {
    if (lockBoard) return;
    if (this === firstTile) return;

    this.classList.add('flip');

    if (!hasFlippedTiles) {
        //first time the guy clicked
        hasFlippedTiles = true;
        firstTile = this;
    }
    else {
        //second click

        secondTiles = this;

        checkForMatch();
    }


}

function checkForMatch() {

    //check if tiles match
    if (firstTile.dataset.framework === secondTiles.dataset.framework) {
        disableTiles();
    }

    else {
        enableTiles();
    }

}

function disableTiles() {
    firstTile.removeEventListener('click', flipTiles);
    secondTiles.removeEventListener('click', flipTiles);
    resetBoard();
}
function enableTiles() {
    lockBoard = true;
    setTimeout(() => {
        firstTile.classList.remove('flip');
        secondTiles.classList.remove('flip');
        resetBoard();
    }, 800);
}
function resetBoard() {
    [hasFlippedTiles, lockBoard] = [false, false];
    [firstTile, secondTiles] = [null, null];
}


/*(function shuffle() {
    Wtiles.forEach(Wtiles => {
        let randomPos = Math.floor(Math.random() * 51) / 2 * 2;
        Wtiles.style.order = randomPos;
    });

    Btiles.forEach(Btiles => {
        let randomPos = Math.floor(Math.random() * 51) / 2 * 2 + 1;
        Btiles.style.order = randomPos;
    });

})();
*/



Wtiles.forEach(Wtiles => Wtiles.addEventListener('click', flipTiles));
Btiles.forEach(Btiles => Btiles.addEventListener('click', flipTiles));
