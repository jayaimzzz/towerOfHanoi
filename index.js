// // const (variable to keep track of which mode the player is in)
// let playerHoldingDisc = false;

const xLargeDisc = document.getElementById("xLargeDisc");
const largeDisc = document.getElementById("largeDisc");
const mediumDisc = document.getElementById("mediumDisc");
const smallDisc = document.getElementById("smallDisc");

const towerOne = document.getElementById("startTower");
const towerTwo = document.getElementById("offsetTower");
const towerThree = document.getElementById("endTower");

// towerOne.addEventListener("click", handleClick);
// towerTwo.addEventListener("click", handleClick);
// towerThree.addEventListener("click", handleClick);

// // let playerHoldingDisc = [];


// function handleClick(event) {
//   const tower = event.target;
//   removeDisc(tower);
// }


// function removeDisc(tower) {
//   console.log("string_Disk", tower);
//   if (playerHoldingDisc === false) {
//     playerHoldingDisc.appendChild(tower);
//   }

//   if (playerHoldingDisc === true) {
//     tower.appendChild(playerHoldingDisc);
//   }

// }

// function placeDisc(tower) {
//   console.log("Hello")
// }

const towers = [towerOne, towerTwo, towerThree];
// let discInHand = [];

towers.forEach( function(tower) 

{
  tower.addEventListener("click", pickUpDisc);

})
let discInHand = null
function pickUpDisc(event) {
  const tower = event.target
  // console.log(tower.lastElementChild)
  discInHand = tower.lastElementChild;
  tower.removeChild(discInHand)
  console.log(tower)
  for (let i = 0; i < towers.length; i++){
    towers[i].removeEventListener("click", pickUpDisc);
    towers[i].addEventListener("click", dropDisc);
  }
  
  
}

function dropDisc(event) {
  const tower = event.target
  console.log(tower)
  tower.appendChild(discInHand);
  discInHand = null;
  for (let i = 0; i < towers.length; i++){
    towers[i].removeEventListener("click", dropDisc);
    towers[i].addEventListener("click", pickUpDisc);
  }
  // tower.removeEventListener("click", dropDisc);
  // tower.addEventListener("click", pickUpDisc);
}