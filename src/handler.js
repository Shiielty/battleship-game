import { Player, Computer } from './player.js';
import { Ships } from './ships.js';

const playerDefault = Player('human');
const computerDefault = Computer('computer');
const playerShip1 = Ships([[0, 0], [0, 1]]);
const computerShip1 = Ships([[3, 3], [3, 4]]);

playerDefault.placeShip(playerShip1);
computerDefault.placeShip(computerShip1);

export { playerDefault, computerDefault };
