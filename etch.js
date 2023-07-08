let colorChoice;
let numOfSquares;
let choiceSquares = 16; //temp code for testing purposes later on this will be a user input
let size;
const gridContainer = document.querySelector('#gridContainer');
let h = 0;
let etchGrid = [];


const makeGrid = document.querySelector("#MakeGrid");
const btnBlack = document.querySelector('#black');
const btnErase = document.querySelector('#clearAll');


colorChoice = 'black'; // temp code for early version will delete after impleting rainbow feature
numOfSquares = choiceSquares*choiceSquares;



createElement(etchGrid);


function createElement(etchGrid) {
    for (i = 0; i < choiceSquares; i++) {
        gridContainer.innerHTML += `<div class="row" id="row${i}" </div>`;
        let gridRow = document.querySelector(`#row${i}`);
        document.getElementsByClassName("row")[i].style.height = "60px";
        for (j = 0; j < choiceSquares; j++) {
            gridRow.innerHTML += `<div class="square" id=r"${i}c${j}" onmouseover="changeColor(this)"> </div>`;

            document.getElementsByClassName("square")[h].style.height = "60px";
            document.getElementsByClassName("square")[h].style.width = "60px";

            etchGrid.push(document.getElementsByClassName("square")[h]);
            h++;
        }
    }
} //creates the grid



function elementSize(num) {
    size = 960 / num;
    size = Math.trunc();
    return size;
} // sets the size of the squares.

function changeColor(x) {
    x.style.backgroundColor = `${colorChoice}`;
}

function clearGrid() {
    document.querySelectorAll(".square").forEach(el =>el.remove());
    h=0;
    etchGrid = [];
}

btnErase.addEventListener("click", function()  {
    clearGrid();
    createElement(etchGrid);
});


