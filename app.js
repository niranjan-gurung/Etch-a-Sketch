/* Colour Palette:
 *
 * Terra Cotta: #ED6A5A
 * Pale Spring Bud: #F4F1BB
 * Opal: #9BC1BC
 * Cadet Blue: #5CA4A9
 * Alabaster: #E6EBE0
 */
const GRID_SIZE = 16;
const playGround = document.getElementById('playGround');

/* SETUP 16X16 GRID: */
for (let i = 0; i < GRID_SIZE; i++) {
  for (let j = 0; j < GRID_SIZE; j++) {
    const newdiv = document.createElement('div');
    newdiv.classList.toggle('box');
    newdiv.style.cssText = 'border: 1.5px solid #ED6A5A;';
    playGround.appendChild(newdiv);
  }
}

const grid = document.querySelectorAll('#playGround .box');
const clearBtn = document.getElementById('clear');
/* DRAWING ON GRID: */
grid.forEach((box) => {
  box.addEventListener('mouseover', () => {
    box.style.cssText = 'background-color: #9BC1BC';
  });
  clearBtn.addEventListener('click', () => {
    box.style.cssText = 'border: 1.5px solid #ED6A5A;';
  });
  // box.addEventListener('mouseout', () => {
  //   box.style.cssText = 'border: 1.5px solid #ED6A5A;';
  // });
});

