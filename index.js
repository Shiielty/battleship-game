import { Ships } from './ships.js';
import { Player, Computer } from './player.js';

const player = Player('human');
const ship1 = Ships([[0, 0], [0, 1], [0, 3]]);

player.placeShip(ship1);

console.log(player.getGameboard().getBoard());
console.log(player.getGameboard().getDeployed()[0].getCoor());
