import { Player, Computer } from './player.js';
import { Ships } from './ships.js';

const playerDefault = Player('human');
const computerDefault = Computer('computer');
const playerShip1 = Ships([[0, 0], [0, 1]]);
const playerShip2 = Ships([[2, 2], [3, 2], [4, 2], [5, 2]]);
const computerShip1 = Ships([[3, 3], [3, 4], [3, 5]]);
const computerShip2 = Ships([[7, 7]]);

playerDefault.placeShip(playerShip1);
playerDefault.placeShip(playerShip2);
computerDefault.placeShip(computerShip1);
computerDefault.placeShip(computerShip2);

export { playerDefault, computerDefault };
