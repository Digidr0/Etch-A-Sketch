const gridContainer = document.querySelector(".grid-container");
const btnNew = document.querySelector(".button-new");
const btnClear = document.querySelector(".button-clear");
const paintColorInput  = document.querySelector('#paint-color');
const baseColorInput  = document.querySelector('#base-color');
let paintColor = 'crimson'; //none
let defaultColor = 'white';

let inputType = "click"

let gridBlock = {};
let cell = [];
let z = 16

const gridSize = 640; //px

function toggle(){
  var toggleInput = document.getElementById("toggle-mouse-click");
    gridBlock.forEach(e =>{
  if (toggleInput.checked == true){
    e.removeEventListener("click", activatePen);
    e.addEventListener("mouseover", activatePen);
  } else {
    e.removeEventListener("mouseover", activatePen);
    e.addEventListener("click", activatePen);
  }
})
}

function createGrid(z) {
  for (c = 0; c < (z*z); c++) {
    gridContainer.style.setProperty('--grid-z', z);
    gridContainer.style.setProperty('--cell-size', `${gridSize/z}px`);
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    gridContainer.appendChild(cell).className = "grid-block";
    cell.appendChild;
    cell.addEventListener(inputType, activatePen);
    console.log(inputType);

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


