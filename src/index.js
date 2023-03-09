/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable max-len */
import { game } from './game.js';
import { Ships } from './ships.js';

let [playerObj, computerObj] = game.initiatePlayer();
game.renderGameStart(playerObj);
let gameboard = document.querySelector('.gameboard');
gameboard.dataset.hiddenTiles = '3';
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
        const coordinate1 = [
          [row, col],
          [row, col + 1],
          [row, col + 2],
          [row, col + 3],
        ];
        if (col + 3 <= 9) {
          const ship1 = Ships(coordinate1);
          playerObj.placeShip(ship1);
          playerShips.push(...coordinate1);
          console.log(playerShips);
          shipNumber += 1;
          game.renderGameStart(playerObj);
          gameboard = document.querySelector('.gameboard');
          gameboard.dataset.hiddenTiles = '2';
        }
        break;
      case 2:
        const coordinate2 = [
          [row, col],
          [row, col + 1],
          [row, col + 2],
        ];
        if (col + 2 <= 9 && !game.isSameArray(coordinate2, playerShips)) {
          const ship2 = Ships(coordinate2);
          playerObj.placeShip(ship2);
          playerShips.push(...coordinate2);
          shipNumber += 1;
          game.renderGameStart(playerObj);
          gameboard = document.querySelector('.gameboard');
          gameboard.dataset.hiddenTiles = '2';
        }
        break;
      case 3:
        const coordinate3 = [
          [row, col],
          [row, col + 1],
          [row, col + 2],
        ];
        if (col + 2 <= 9 && !game.isSameArray(coordinate3, playerShips)) {
          const ship3 = Ships(coordinate3);
          playerObj.placeShip(ship3);
          playerShips.push(...coordinate3);
          shipNumber += 1;
          game.renderGameStart(playerObj);
          gameboard = document.querySelector('.gameboard');
          gameboard.dataset.hiddenTiles = '1';
        }
        break;
      case 4:
        const coordinate4 = [
          [row, col],
          [row, col + 1],
        ];
        if (col + 2 <= 9 && !game.isSameArray(coordinate4, playerShips)) {
          const ship4 = Ships(coordinate4);
          playerObj.placeShip(ship4);
          playerShips.push(...coordinate4);
          shipNumber += 1;
          game.renderGameStart(playerObj);
        }
        break;
      case 5:
        const coordinate5 = [[row, col]];
        if (col + 2 <= 9 && !game.isSameArray(coordinate5, playerShips)) {
          const ship5 = Ships(coordinate5);
          playerObj.placeShip(ship5);
          playerShips.push(...coordinate5);
          game.placeAllShips(computerObj, game.createComputerShips());
          game.renderGame(playerObj, computerObj);
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
      if (computerObj.getGameboard().getBoard()[row][col] !== null) {
        e.target.dataset.status = 'hit';
      } else {
        e.target.dataset.status = 'miss';
      }
      if (computerObj.getGameboard().isAllSunk()) {
        winner = 'player';
        game.over(winner);
      }

      // after player turn, computer will automatically play
      const randCoor = computerObj.findRandomCoordinate();
      game.computerTurn(randCoor, computerObj, playerObj);
      const selectedTiles = document.querySelector(
        `.tiles[data-name='player'][data-row="${randCoor[0]}"][data-col="${randCoor[1]}"]`
      );
      console.log(selectedTiles);
      if (
        playerObj.getGameboard().getBoard()[randCoor[0]][randCoor[1]] !== null
      ) {
        selectedTiles.dataset.status = 'hit';
      } else {
        selectedTiles.dataset.status = 'miss';
      }
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
    gameboard = document.querySelector('.gameboard');
    gameboard.dataset.hiddenTiles = '3';
    playerShips.length = 0; // empty the array
    shipNumber = 1;
  }
});
