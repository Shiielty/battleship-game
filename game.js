import {
  createHeader,
  createMain,
  createFooter,
  createGameOver,
} from './dom.js';
import { Player, Computer } from './player.js';
import { Ships } from './ships.js';

const initiatePlayer = () => {
  const playerObj = Player('player');
  const computerObj = Computer('computer');
  const playerShip1 = Ships([
    [0, 0],
    [0, 1],
  ]);
  const playerShip2 = Ships([
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
  ]);
  const computerShip1 = Ships([
    [3, 3],
    [3, 4],
    [3, 5],
  ]);
  const computerShip2 = Ships([[7, 7]]);

  playerObj.placeShip(playerShip1);
  playerObj.placeShip(playerShip2);
  computerObj.placeShip(computerShip1);
  computerObj.placeShip(computerShip2);

  return [playerObj, computerObj];
};

const render = (playerObj, computerObj) => {
  const content = document.querySelector('.content');
  content.replaceChildren(
    createHeader(),
    createMain(playerObj, computerObj),
    createFooter(),
  );
};

const renderGameOver = (winner) => {
  const content = document.querySelector('.content');
  content.appendChild(createGameOver(winner));
};

const changeColor = (row, col, name) => {
  const targetTiles = document.querySelector(
    `.tiles[data-name="${name}"][data-row="${row}"][data-col="${col}"]`,
  );
  targetTiles.dataset.clicked = 'true';
};

const playerTurn = (row, col, enemyObj) => {
  enemyObj.getGameboard().receiveAttack([row, col]);
  changeColor(row, col, enemyObj.getName());
};

const computerTurn = (computerObj, enemyObj) => {
  const randCoor = computerObj.findRandomCoordinate();
  const [row, col] = randCoor;
  computerObj.computerAttack(enemyObj, [row, col]);
  changeColor(row, col, enemyObj.getName());
};

const over = (winner) => {
  if (winner === 'player') {
    console.log('player win!');
    renderGameOver(winner);
  } else if (winner === 'computer') {
    console.log('computer win!');
    renderGameOver(winner);
  }
};

function restart() {
  const [playerObj, computerObj] = initiatePlayer();
  render(playerObj, computerObj);
  return [playerObj, computerObj];
}

const game = {
  initiatePlayer,
  render,
  playerTurn,
  computerTurn,
  over,
  restart,
};

export { game };
