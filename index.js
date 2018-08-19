const xLargeDisc = document.getElementById("xLargeDisc");
const largeDisc = document.getElementById("largeDisc");
const mediumDisc = document.getElementById("mediumDisc");
const smallDisc = document.getElementById("smallDisc");

const towerOne = document.getElementById("startTower");
const towerTwo = document.getElementById("offsetTower");
const towerThree = document.getElementById("endTower");
towerThree.onclick
const towers = [towerOne, towerTwo, towerThree];

let numberOfMoves = 0;

function resetGrabCursor() {
  towers.forEach(function (tower) {
    if (tower.childElementCount > 0) {
      tower.style.cursor = "grab";
    } else {
      tower.style.cursor = "auto";
    }
  })
}

function setCursorToMove(discInHand) {
  let sizeOfDiscInHand = parseInt(discInHand.dataset.size)
  towers.forEach(function (tower) {
    tower.style.cursor = "move";
    if (tower.childElementCount > 0 && sizeOfDiscInHand > parseInt(tower.lastElementChild.dataset.size)) {
      tower.style.cursor = "not-allowed"
    }
  })
}

resetGrabCursor();
towers.forEach(function (tower) {
  tower.addEventListener("click", pickUpDisc);
})
let discInHand = null

function pickUpDisc(event) {


  const tower = event.currentTarget
  if (tower.childElementCount > 0) {
    discInHand = tower.lastElementChild;
    setCursorToMove(discInHand);
    tower.removeChild(discInHand)
    document.getElementById("wrapper").style.cursor = "move"
    for (let i = 0; i < towers.length; i++) {
      towers[i].removeEventListener("click", pickUpDisc);
      towers[i].addEventListener("click", dropDisc);
    }

  }
}

function dropDisc(event) {
  const tower = event.currentTarget
  let sizeOfTopDisc = 500;
  if (tower.childElementCount > 0) {
    sizeOfTopDisc = parseInt(tower.lastElementChild.dataset.size)
  }
  if (discInHand.dataset.size < sizeOfTopDisc) {
    tower.appendChild(discInHand);
    discInHand = null;
    for (let i = 0; i < towers.length; i++) {
      towers[i].removeEventListener("click", dropDisc);
      towers[i].addEventListener("click", pickUpDisc);
    }
    resetGrabCursor();
    numberOfMoves++
  } 
    // else {
    // alert("A larger disk cannot be placed on top of a smaller disk.");
  // }
  if (towerTwo.childElementCount == 4 || towerThree.childElementCount == 4) {
    const youWinText = document.createTextNode("You Win! And it took you only " + numberOfMoves + " moves!");
    const newP = document.createElement('p');
    const desination = document.getElementById('youWinDiv');
    desination.innerHTML = "";
    newP.appendChild(youWinText);
    desination.appendChild(newP);
    towers.forEach(function(tower){
      tower.style.backgroundColor = "pink";
    });
  }
}