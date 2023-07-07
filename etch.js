let colorChoice;
let numOfSquares;
let choiceSquares = 16; //temp code for testing purposes later on this will be a user input
let size;
const gridContainer = document.querySelector('#gridContainer');
let h = 0;


const makeGrid = document.querySelector("#MakeGrid");

colorChoice = 'black'; // temp code for early version will delete after impleting rainbow feature
numOfSquares = choiceSquares*choiceSquares;



window.onload = function() {
    choiceSquares;
    size = elementSize(choiceSquares);
    createElement();
} // first load



function createElement() {
    for (i = 0; i < choiceSquares; i++) {
        gridContainer.innerHTML += `<div class="row" id="row${i}" </div>`;
        let gridRow = document.querySelector(`#row${i}`);
        document.getElementsByClassName("row")[i].style.height = "60px";
        for (j = 0; j < choiceSquares; j++) {
            gridRow.innerHTML += `<div class="square" id=r"${i}c${j}"> </div>`;
            let etchGrid = document.querySelector(`r${i}c${j}`);
            document.getElementsByClassName("square")[h].style.height = "60px";
            document.getElementsByClassName("square")[h].style.width = "60px";
            h++;
        }
    }
    
    
} //creates the grid

function elementSize(num) {
    size = 960 / num;
    size = Math.trunc();
    return size;
} // sets the size of the squares.

