/* Colour Palette:
 *
 * Terra Cotta: #ED6A5A
 * Pale Spring Bud: #F4F1BB
 * Opal: #9BC1BC
 * Cadet Blue: #5CA4A9
 * Alabaster: #E6EBE0
 */

/* implement display: grid for the drawing area instead of flexbox! */

const GRID_SIZE = 16;
const parent = document.getElementById('container');

/* SETUP 16X16 GRID: */
for (let i = 0; i < GRID_SIZE; i++) {
  for (let j = 0; j < GRID_SIZE; j++) {
    const newdiv = document.createElement('div');
    newdiv.style.cssText = 'border: 1px solid #ED6A5A; padding: 10px;';
    parent.appendChild(newdiv);
  }
}