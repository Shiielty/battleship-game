/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable max-len */
import { game } from './game.js';
import { Ships } from './ships.js';

let [playerObj, computerObj] = game.initiatePlayer();
game.renderGameStart(playerObj);
const playerShips = [];
let shipNumber = 1;

let winner = '';

const content = document.querySelector('.content');

content.addEventListener('click', (e) => {
  if (
    e.target.className === 'tiles' &&
    e.target.parentElement.parentElement.className === 'place-ships'
  ) {
    const row = parseInt(e.target.dataset.row, 10);
    const col = parseInt(e.target.dataset.col, 10);

    switch (shipNumber) {
      case 1:
        if (col + 3 <= 9) {
          const ship1 = Ships([
            [row, col],
            [row, col + 1],
            [row, col + 2],
            [row, col + 3],
          ]);
          playerShips.push(ship1);
          shipNumber += 1;
        }
        break;
      case 2:
        if (col + 2 <= 9 && game.isOccupied(row, col, 3, playerShips)) {
          const ship2 = Ships([
            [row, col],
            [row, col + 1],
            [row, col + 2],
          ]);
          playerShips.push(ship2);
          shipNumber += 1;
        }
        break;
      case 3:
        if (col + 2 <= 9 && game.isOccupied(row, col, 3, playerShips)) {
          const ship3 = Ships([
            [row, col],
            [row, col + 1],
            [row, col + 2],
          ]);
          playerShips.push(ship3);
          shipNumber += 1;
        }
        break;
      case 4:
        if (col + 1 <= 9 && game.isOccupied(row, col, 2, playerShips)) {
          const ship4 = Ships([
            [row, col],
            [row, col + 1],
          ]);
          playerShips.push(ship4);
          shipNumber += 1;
        }
        break;
      case 5:
        if (col <= 9 && game.isOccupied(row, col, 1, playerShips)) {
          const ship5 = Ships([[row, col]]);
          playerShips.push(ship5);
          game.placeAllShips(playerObj, playerShips);
          game.placeAllShips(computerObj, game.createComputerShips());
          game.gameStart(playerObj, computerObj);
        }
        break;
      default:
        break;
    }
  }

  if (e.target.className === 'tiles' && e.target.dataset.clicked === 'false') {
    const { name } = e.target.dataset;
    const { row } = e.target.dataset;
    const { col } = e.target.dataset;

    if (name === 'computer') {
      e.target.dataset.clicked = 'true';
      game.playerTurn(row, col, computerObj);
      if (computerObj.getGameboard().isAllSunk()) {
        winner = 'player';
        game.over(winner);
      }

      // after player turn, computer will automatically play
      game.computerTurn(computerObj, playerObj);
      if (playerObj.getGameboard().isAllSunk()) {
        winner = 'computer';
        game.over(winner);
      }
    }
  }

  if (e.target.className.includes('game-over-btn')) {
    winner = '';
    [playerObj, computerObj] = game.initiatePlayer();
    game.renderGameStart(playerObj);
    playerShips.length = 0; // empty the array
    shipNumber = 1;
  }
});
