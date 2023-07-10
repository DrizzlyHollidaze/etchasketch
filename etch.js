let colorChoice;
let numOfSquares;
let choiceSquares = 16; // defualt option
let size =60; //default size
const gridContainer = document.querySelector('#gridContainer');
let h = 0;
let etchGrid = [];
let isRainbow = false;
let rainbowArray = ["red", "orange", "yellow", "green", "blue", "purple"];


const makeGrid = document.querySelector("#MakeGrid");
const btnBlack = document.querySelector('#black');
const btnErase = document.querySelector('#clearAll');
const pSquare = document.querySelector('#squareInfo');
const btnRainbow = document.querySelector('#rainbow');

colorChoice = 'black'; // default option
numOfSquares = choiceSquares*choiceSquares;



createElement(etchGrid);
pSquare.innerHTML = `The number of squres is ${choiceSquares}`;
let containerSize = (size) * choiceSquares ;
document.getElementsByClassName("gridContainer")[0].style.height = `${containerSize}px`;
document.getElementsByClassName("gridContainer")[0].style.width = `${containerSize}px`;
function createElement(etchGrid) {
    for (i = 0; i < choiceSquares; i++) {
        gridContainer.innerHTML += `<div class="row" id="row${i}" </div>`;
        let gridRow = document.querySelector(`#row${i}`);
        //document.getElementsByClassName("row")[i].style.height = `${size}px`;
        for (j = 0; j < choiceSquares; j++) {
            gridRow.innerHTML += `<div class="square" id=r"${i}c${j}" onmouseover="changeColor(this)"> </div>`;

            document.getElementsByClassName("square")[h].style.height = `${size}px`;
            document.getElementsByClassName("square")[h].style.width =  `${size}px`;

            etchGrid.push(document.getElementsByClassName("square")[h]);
            h++;
        }
    }
} //creates the grid

function squareSliderChange() {
    choiceSquares = document.getElementById("squareSlider").value;
    pSquare.innerText = `The number of squares is ${choiceSquares}`;
}

function elementSize(num) {
    size = 960 / num;
    
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

btnBlack.addEventListener("click", function() {
    colorChoice = "black";
    isRainbow = false;
})

btnRainbow.addEventListener("click", function() {
    isRainbow = true; 
})

makeGrid.addEventListener("click", function() {
    clearGrid();
    squareSliderChange();
    size = elementSize(choiceSquares);
    createElement(etchGrid);
})

gridContainer.addEventListener("mouseover", function() {
    randomColor();
})


function randomColor () {
    if (isRainbow == true) {
        colorChoice = rainbowArray [(Math.floor(Math.random() * rainbowArray.length))];
    }
}