import {
  createHeader,
  createMain,
  createFooter,
  createGameOver,
  createPlaceShips,
  changeColor,
} from './dom.js';
import { Player, Computer } from './player.js';
import { Ships } from './ships.js';

const initiatePlayer = () => {
  const playerObj = Player('player');
  const computerObj = Computer('computer');
  return [playerObj, computerObj];
};

const placeAllShips = (players, ships) => {
  ships.forEach((ship) => players.placeShip(ship));
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

const renderGameStart = (player) => {
  const content = document.querySelector('.content');
  content.replaceChildren(
    createHeader(),
    createPlaceShips(player),
    createFooter()
  );
};

const renderGame = (playerObj, computerObj) => {
  const content = document.querySelector('.content');
  content.replaceChildren(
    createHeader(),
    createMain(playerObj, computerObj),
    createFooter()
  );
};

const renderGameOver = (winner) => {
  const content = document.querySelector('.content');
  content.appendChild(createGameOver(winner));
};

const over = (winner) => {
  if (winner === 'player') {
    renderGameOver(winner);
  } else if (winner === 'computer') {
    renderGameOver(winner);
  }
};

const gameStart = (playerObj, playerShips, computerObj) => {
  placeAllShips(playerObj, playerShips);
  renderGame(playerObj, computerObj);
};

function restart() {
  const [playerObj, computerObj] = initiatePlayer();
  render(playerObj, computerObj);
  return [playerObj, computerObj];
}

const game = {
  placeAllShips,
  initiatePlayer,
  renderGameStart,
  renderGame,
  playerTurn,
  computerTurn,
  over,
  gameStart,
  restart,
};

export { game };
