const gridContainer = document.querySelector(".grid-container");
const btnNew = document.querySelector(".button-new");
const btnClear = document.querySelector(".button-clear");
const paintColorInput  = document.querySelector('#paint-color');
const baseColorInput  = document.querySelector('#base-color');
const toggleInput = document.querySelector('.toggle');
let paintColor = 'crimson'; //none

let defaultColor = 'white';

let gridBlock = {};
let cell = [];
let z = 16

const gridSize = 640; //px

function createGrid(z) {
  for (c = 0; c < (z*z); c++) {
    gridContainer.style.setProperty('--grid-z', z);
    gridContainer.style.setProperty('--cell-size', `${gridSize/z}px`);
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    gridContainer.appendChild(cell).className = "grid-block";
    cell.appendChild;
    cell.addEventListener('mouseover', activatePen);
  };
  gridBlock = document.querySelectorAll(".grid-block");
};
function newGrid() {
  gridBlock.forEach(e => {
    e.remove();
  });

  createGrid(prompt('Size', 10))
};

function clearGrid() {
    gridBlock.forEach(e => {
    e.style = `background-color: var()`;
    });
}

function colorFill() {
  gridBlock.forEach(e => {
  e.style = `background-color: ${this.value}`;
  });
}


function activatePen(e) {
  this.style = `background-color: ${paintColor}`;

}

function colorUpdate(){
  paintColor = this.value;
  document.documentElement.style.setProperty(`--second-color`, this.value)


}

createGrid(z);
btnNew.addEventListener("click", newGrid);
btnClear.addEventListener("click", clearGrid);

paintColorInput.addEventListener("change", colorUpdate)
baseColorInput.addEventListener("change", colorFill)
paintColorInput.addEventListener("mouseover", colorUpdate)

toggleInput.addEventListener("mouseover", function(e){
 if (e.cheked){
   console.log(true);
 } else console.log(e);
})
