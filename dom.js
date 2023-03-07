import { playerDefault, computerDefault } from './handler.js';

const createHeader = () => {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent = 'BATTLESHIP';
  header.appendChild(h1);
  console.log(header);
  console.log(h1);

  return header;
};

const createGameboard = (player) => {
  const playerBoard = player.getGameboard().getBoard();
  const boardDimension = [playerBoard.length, playerBoard[0].length];
  const totalTiles = boardDimension[0] * boardDimension[1];

  const gameboard = document.createElement('div');
  gameboard.classList.add('gameboard');

  playerBoard.forEach((row) => {
    row.forEach((column) => {
      const tiles = document.createElement('div');
      tiles.classList.add('tiles');
      if (column !== null) {
        tiles.textContent = 'x';
      }

      gameboard.appendChild(tiles);
    });
  });

  return gameboard;
};

const createMain = () => {
  const player = playerDefault;
  const computer = computerDefault;

  const main = document.createElement('main');
  const playerSide = document.createElement('div');
  const computerSide = document.createElement('div');
  const playerTitle = document.createElement('h2');
  const computerTitle = document.createElement('h2');
  const playerGameboard = createGameboard(player);
  const computerGameboard = createGameboard(computer);

  playerTitle.textContent = 'Player';
  computerTitle.textContent = 'Computer';

  playerSide.appendChild(playerTitle);
  playerSide.appendChild(playerGameboard);
  computerSide.appendChild(computerTitle);
  computerSide.appendChild(computerGameboard);
  main.appendChild(playerSide);
  main.appendChild(computerSide);

  return main;
};

export { createHeader, createMain };
