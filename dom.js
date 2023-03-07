import { playerDefault, computerDefault } from './handler.js';

const createHeader = () => {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent = 'BATTLESHIP';
  header.appendChild(h1);

  return header;
};

const createGameboard = (player) => {
  const playerBoard = player.getGameboard().getBoard();
  const boardDimension = [playerBoard.length, playerBoard[0].length];
  const totalTiles = boardDimension[0] * boardDimension[1];

  const gameboard = document.createElement('div');
  gameboard.classList.add('gameboard');

  playerBoard.forEach((row, rowIndex) => {
    row.forEach((column, colIndex) => {
      const tiles = document.createElement('div');
      tiles.classList.add('tiles');
      if (column !== null) {
        tiles.textContent = 'x';
      }
      tiles.dataset.name = player.getName();
      tiles.dataset.col = colIndex;
      tiles.dataset.row = rowIndex;
      tiles.dataset.clicked = 'false';
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

const createFooter = () => {
  const footer = document.createElement('footer');
  footer.innerHTML =
    'Copyright &copy; 2023 <a href="https://github.com/Shiielty">Shiielty</a>';

  return footer;
};

export { createHeader, createMain, createFooter };
