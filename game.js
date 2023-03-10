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

const isVerticalRand = () => {
  const isVertical = Math.round(Math.random());
  return isVertical;
};

const isSameArrayAdvance = (arr1, arr2) => arr1.some((a1) => arr2.some((a2) => a1.every((val, i) => val === a2[i]))) ||
  arr1.some((a1) => arr2.some((a2) => a1[0] === a2[0] + 1 && a1[1] === a2[1])) ||
  arr1.some((a1) => arr2.some((a2) => a1[0] === a2[0] + 1 && a1[1] === a2[1] + 1)) ||
  arr1.some((a1) => arr2.some((a2) => a1[0] === a2[0] && a1[1] === a2[1] + 1)) ||
  arr1.some((a1) => arr2.some((a2) => a1[0] === a2[0] - 1 && a1[1] === a2[1] + 1)) ||
  arr1.some((a1) => arr2.some((a2) => a1[0] === a2[0] - 1 && a1[1] === a2[1])) ||
  arr1.some((a1) => arr2.some((a2) => a1[0] === a2[0] - 1 && a1[1] === a2[1] - 1)) ||
  arr1.some((a1) => arr2.some((a2) => a1[0] === a2[0] && a1[1] === a2[1] - 1)) ||
  arr1.some((a1) => arr2.some((a2) => a1[0] === a2[0] + 1 && a1[1] === a2[1] - 1));

const isSameArrayAdvance2 = (arr1, arr2) => arr1.some((a1) => arr2.some((a2) => a1.every((val, i) => val === a2[i]))) && 
  arr1.some((a1) => arr2.some((a2) => a1[0] === a2[0] + 1 && a1[1] === a2[1])) &&
  arr1.some((a1) => arr2.some((a2) => a1[0] === a2[0] + 1 && a1[1] === a2[1] + 1)) &&
  arr1.some((a1) => arr2.some((a2) => a1[0] === a2[0] && a1[1] === a2[1] + 1)) &&
  arr1.some((a1) => arr2.some((a2) => a1[0] === a2[0] - 1 && a1[1] === a2[1] + 1)) &&
  arr1.some((a1) => arr2.some((a2) => a1[0] === a2[0] - 1 && a1[1] === a2[1])) &&
  arr1.some((a1) => arr2.some((a2) => a1[0] === a2[0] - 1 && a1[1] === a2[1] - 1)) &&
  arr1.some((a1) => arr2.some((a2) => a1[0] === a2[0] && a1[1] === a2[1] - 1)) &&
  arr1.some((a1) => arr2.some((a2) => a1[0] === a2[0] + 1 && a1[1] === a2[1] - 1));

const createComputerShips = () => {
  const computerShips = [];
  const occupiedTiles = [];

  const coordinates1 = [];
  if (isVerticalRand()) {
    const row = Math.floor(Math.random() * 7);
    const col = Math.floor(Math.random() * 10);
    coordinates1.push(
      [row, col],
      [row + 1, col],
      [row + 2, col],
      [row + 3, col],
    );
  } else {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 7);
    coordinates1.push(
      [row, col],
      [row, col + 1],
      [row, col + 2],
      [row, col + 3],
    );
  }
  occupiedTiles.push(...coordinates1);

  const coordinates2 = [];
  while (true) {
    coordinates2.length = 0;
    if (isVerticalRand()) {
      const row = Math.floor(Math.random() * 8);
      const col = Math.floor(Math.random() * 10);
      coordinates2.push([row, col], [row + 1, col], [row + 2, col]);
      if (!isSameArrayAdvance(occupiedTiles, coordinates2)) {
        break;
      }
    } else {
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 8);
      coordinates2.push([row, col], [row, col + 1], [row, col + 2]);
      if (!isSameArrayAdvance(occupiedTiles, coordinates2)) {
        break;
      }
    }
  }
  occupiedTiles.push(...coordinates2);

  const coordinates3 = [];
  while (true) {
    coordinates3.length = 0;
    if (isVerticalRand()) {
      const row = Math.floor(Math.random() * 8);
      const col = Math.floor(Math.random() * 10);
      coordinates3.push([row, col], [row + 1, col], [row + 2, col]);
      if (!isSameArrayAdvance(occupiedTiles, coordinates3)) {
        break;
      }
    } else {
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 8);
      coordinates3.push([row, col], [row, col + 1], [row, col + 2]);
      if (!isSameArrayAdvance(occupiedTiles, coordinates3)) {
        break;
      }
    }
  }
  occupiedTiles.push(...coordinates3);

  const coordinates4 = [];
  while (true) {
    coordinates4.length = 0;
    if (isVerticalRand()) {
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 10);
      coordinates4.push([row, col], [row + 1, col]);
      if (!isSameArrayAdvance(occupiedTiles, coordinates4)) {
        break;
      }
    } else {
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 9);
      coordinates4.push([row, col], [row, col + 1]);
      if (!isSameArrayAdvance(occupiedTiles, coordinates4)) {
        break;
      }
    }
  }
  occupiedTiles.push(...coordinates4);

  const coordinates5 = [];
  while (true) {
    coordinates5.length = 0;
    if (isVerticalRand()) {
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);
      coordinates5.push([row, col]);
      if (!isSameArrayAdvance(occupiedTiles, coordinates5)) {
        break;
      }
    } else {
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);
      coordinates5.push([row, col]);
      if (!isSameArrayAdvance(occupiedTiles, coordinates5)) {
        break;
      }
    }
  }
  occupiedTiles.push(...coordinates4);

  const ship1 = Ships(coordinates1);
  const ship2 = Ships(coordinates2);
  const ship3 = Ships(coordinates3);
  const ship4 = Ships(coordinates4);
  const ship5 = Ships(coordinates5);
  computerShips.push(ship1, ship2, ship3, ship4, ship5);
  return computerShips;
};

const playerTurn = (row, col, enemyObj) => {
  enemyObj.getGameboard().receiveAttack([row, col]);
  changeColor(row, col, enemyObj.getName());
};

const computerTurn = (randCoor, computerObj, enemyObj) => {
  const [row, col] = randCoor;
  computerObj.computerAttack(enemyObj, [row, col]);
  changeColor(row, col, enemyObj.getName());
};

const renderGameStart = (player) => {
  const content = document.querySelector('.content');
  content.replaceChildren(
    createHeader(),
    createPlaceShips(player),
    createFooter(),
  );
};

const renderGame = (playerObj, computerObj) => {
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

const over = (winner) => {
  if (winner === 'player') {
    renderGameOver(winner);
  } else if (winner === 'computer') {
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
  createComputerShips,
  placeAllShips,
  renderGameStart,
  renderGame,
  playerTurn,
  computerTurn,
  over,
  restart,
  isSameArrayAdvance,
  isSameArrayAdvance2,
};

export { game };
