import { Ships } from './ships.js';
import { Player, Computer } from './player.js';
import { createHeader, createMain } from './dom.js';

const player = Player('human');
const ship1 = Ships([[0, 0], [0, 1], [0, 3]]);

player.placeShip(ship1);

const content = document.querySelector('.content');
const header = createHeader();
const main = createMain();

content.appendChild(header);
content.appendChild(main);
