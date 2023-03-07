import { Ships } from './ships.js';
import { Player, Computer } from './player.js';
import { createHeader, createMain, createFooter } from './dom.js';
import { playerDefault, computerDefault } from './handler.js';

const player = Player('human');
const ship1 = Ships([
  [0, 0],
  [0, 1],
  [0, 3],
]);

player.placeShip(ship1);

const content = document.querySelector('.content');
const header = createHeader();
const main = createMain();
const footer = createFooter();

content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);

const tiles = document.querySelectorAll('.tiles');

tiles.forEach((tile) => {
  tile.addEventListener('click', (e) => {
    const { name } = e.target.dataset;
    const { row } = e.target.dataset;
    const { col } = e.target.dataset;

    name === 'computer'
      ? console.log(computerDefault.getGameboard().getBoard()[row][col])
      : console.log(playerDefault.getGameboard().getBoard()[row][col]);
  });
});
