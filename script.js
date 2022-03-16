const gridContainer = document.querySelector(".grid-container");
const btnNew = document.querySelector('.button-new');
const btnClear = document.querySelector('.button-clear');
const paintColorInput  = document.querySelector('.paint-color');
const baseColorInput  = document.querySelector('.base-color');
const rainbowColorInput = document.querySelector('#rainbow-checkbox');
const gridSizeInput = document.querySelector('.grid-size');
const sizeTitle = document.querySelector('.size-title');
const toggleTextLeft = document.querySelector('.toggle-text-left');
const toggleTextRight = document.querySelector('.toggle-text-right');

let paintColor = 'crimson'; //none
let defaultColor = 'white';
let InputType = "click"

let gridBlock = {};
let cell = [];
let z = 10

const gridSize = screen.height*0.9; //px

function randomColor() {
  let h = Math.floor(Math.random() * 255);
  let s = Math.floor(Math.random() * 40 + 60);
  let l = Math.floor(Math.random() * 40 + 50);
  return `hsl(${h}, ${s}%, ${l}%)`
}

function createGrid(z) {
  for (c = 0; c < (z*z); c++) {
    gridContainer.style.setProperty('--grid-z', z);
    gridContainer.style.setProperty('--cell-size', `${gridSize/z}px`);
    let cell = document.createElement("div");

    gridContainer.appendChild(cell).className = "grid-block";
    cell.appendChild;
    cell.addEventListener(InputType, activatePen);

  };
  gridBlock = document.querySelectorAll(".grid-block");
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
  if (rainbowColorInput.checked == false){
  this.style = `background-color: ${paintColor}`;
  } else {
  this.style = `background-color: ${randomColor()}`;
  }


}

function colorUpdate(){
  paintColor = this.value;
  document.documentElement.style.setProperty(`--second-color`, this.value)


}

function toggle(){
  let toggleInput = document.querySelector("#toggle");
    gridBlock.forEach(e =>{
  if (toggleInput.checked == true){
    e.removeEventListener("click", activatePen);
    e.addEventListener("mouseover", activatePen);
    toggleTextLeft.style.setProperty("color", 'white');
    toggleTextRight.style.setProperty("color", 'var(--second-color)');
    InputType = "mouseover";
  } else {
    e.removeEventListener("mouseover", activatePen);
    e.addEventListener("click", activatePen);
    toggleTextRight.style.setProperty("color", 'white');
    toggleTextLeft.style.setProperty("color", 'var(--second-color)');
    InputType = "click";
  }
})
}

createGrid(z);

gridSizeInput.addEventListener("mousemove", function newGrid() {
    gridBlock.forEach(e => {
      e.remove();
    });
    createGrid(this.value);
    sizeTitle.textContent = `${this.value} X ${this.value}`

  });
  
btnClear.addEventListener("click", clearGrid);
rainbowColorInput.addEventListener("click",   function(){document.documentElement.style.setProperty(`--rainbow-color`, randomColor())});

paintColorInput.addEventListener("change", colorUpdate);
baseColorInput.addEventListener("change", colorFill);
paintColorInput.addEventListener("mouseover", colorUpdate);


