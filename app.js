const playGround = document.getElementById('playground');
const clearBtn   = document.querySelector('.clear');
const resizeBtn  = document.querySelector('.resize');
const colourBtn  = document.querySelector('.colour');  // need to implement
let gridSize = 16;

function initGrid(gridSize) {
  let cellWidth  = 36/gridSize + "rem";
  let cellHeight = 36/gridSize + "rem";

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let newdiv = document.createElement('div');
      newdiv.classList.toggle('box');
      newdiv.style.cssText = 'background-color: white';
      playGround.appendChild(newdiv);
    }
  }
  // set grid template col+rows to new grid values
  document.getElementById("playground").style.gridTemplateColumns = (`repeat(${gridSize}, ${cellWidth})`);
  document.getElementById("playground").style.gridTemplateRows    = (`repeat(${gridSize}, ${cellHeight})`);
}

/* SETUP DEFAULT 16X16 GRID: */
initGrid(gridSize);

// grid = all individual divs(boxes) as a nodelist:
let grids = document.querySelectorAll('#playground .box');
/* DRAW ON MOUSE HOVER: */
function drawGrid() {
  grids.forEach((box) => {
    box.addEventListener('mouseover', () => {
      box.style.cssText = 'background-color: black';
    });
    clearBtn.addEventListener('click', () => {
      box.style.cssText = 'background-color: white';
    });
  });
}

drawGrid();

resizeBtn.addEventListener('click', () => {
  gridSize = prompt('Enter a grid size (Max: 64x64): ');

  // if cancel is clicked or invalid value is given: 
  if (gridSize == "" || gridSize == null) 
    return;
  else if (gridSize <= 0) {
    alert("Number entered is below 0. Please enter a positive value.");
    return;
  }
  else if (gridSize > 64) {
    alert("Number entered exceeds 64. Please enter a lower value.");
    return;
  }
  
  /* If valid resize value is entered then: */
  // delete all current divs/boxes from container
  while (playGround.firstChild) {
    playGround.removeChild(playGround.firstChild);
  }
  
  // re-initialise with new grid size
  initGrid(gridSize);    
  
  // re-select new amount of nodelist of divs
  grids = document.querySelectorAll('#playground .box');
  
  // clear everything previously drawn on screen
  grids.forEach((box) => box.style.cssText = 'background-color: white');
  
  // redraw blank grid with new size
  drawGrid();
});