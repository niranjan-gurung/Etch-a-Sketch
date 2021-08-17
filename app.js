/* Colour Palette:
 *
 * Terra Cotta: #ED6A5A
 * Pale Spring Bud: #F4F1BB
 * Opal: #9BC1BC
 * Cadet Blue: #5CA4A9
 * Alabaster: #E6EBE0
 */

const playGround = document.getElementById('playground');
const clearBtn   = document.querySelector('.clear');
const resizeBtn  = document.querySelector('.resize');
const colourBtn  = document.querySelector('.colour');  // need to implement

function initGrid(GRID_SIZE) {
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      let newdiv = document.createElement('div');
      newdiv.classList.toggle('box');
      newdiv.style.cssText = 'background-color: white';
      playGround.appendChild(newdiv);
    }
  }
}

/* SETUP DEFAULT 16X16 GRID: */
initGrid(16);

// grid gets all individual divs(boxes) as a nodelist:
let grid = document.querySelectorAll('#playground .box');
/* DRAW ON MOUSE HOVER: */
function drawGrid() {
  grid.forEach((box) => {
    box.addEventListener('mouseover', () => {
      box.style.cssText = 'background-color: black';
    });
    clearBtn.addEventListener('click', () => {
      box.style.cssText = 'background-color: white';
    });
  });
}

drawGrid();

/* TODO: 
 * resizing should appropriately change pixel size of each single div,
 * so that the size of the entire grid stays the same,
 * but its pixel density inside is either increased or decreased. 
 */

resizeBtn.addEventListener('click', () => {
  const newGridSize = prompt('Enter a new grid size: ');
  // if cancel is clicked: 
  if (newGridSize == "" || newGridSize == null) 
    return;
  else {
    /* If valid resize value is entered:
     * re-initialise with new grid size,
     * re-select new amount of nodelist of divs,
     * set grid template col+rows to new grid values,
     * clear everything previously drawn on screen,
     * redraw blank grid with new size.  
     */
    initGrid(newGridSize);    
    grid = document.querySelectorAll('#playground .box');
    document.getElementById("playground").style.gridTemplateColumns = (`repeat(${newGridSize}, 35px)`);
    document.getElementById("playground").style.gridTemplateRows    = (`repeat(${newGridSize}, 35px)`);
    grid.forEach((box) => box.style.cssText = 'background-color: white');
    drawGrid();
  }
});