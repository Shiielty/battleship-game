const createHeader = () => {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent = 'BATTLESHIP';
  header.appendChild(h1);

  return header;
};

const createGameboard = (player) => {
  const playerBoard = player.getGameboard().getBoard();

  const gameboard = document.createElement('div');
  gameboard.classList.add('gameboard');

  playerBoard.forEach((row, rowIndex) => {
    row.forEach((column, colIndex) => {
      const tiles = document.createElement('div');
      tiles.classList.add('tiles');
      if (column !== null && player.getName() === 'player') {
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

const createMain = (playerObj, computerObj) => {
  const player = playerObj;
  const computer = computerObj;

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

const createGameOver = (winner) => {
  const gameOver = document.createElement('div');
  const textBox = document.createElement('div');
  const btn = document.createElement('button');

  gameOver.classList.add('game-over');
  btn.classList.add('btn');
  btn.classList.add('game-over-btn');

  textBox.textContent = `${winner} is the winner!`;
  btn.textContent = 'Play Again';

  textBox.appendChild(btn);
  gameOver.appendChild(textBox);

  return gameOver;
};

const createPlaceShips = (player) => {
  const placeShips = document.createElement('main');
  const h2 = document.createElement('h2');
  const gameBoard = createGameboard(player);

  h2.textContent = 'PLACE YOUR SHIPS';

  placeShips.classList.add('place-ships');

  placeShips.appendChild(h2);
  placeShips.appendChild(gameBoard);

  return placeShips;
};

const changeColor = (row, col, name) => {
  const targetTiles = document.querySelector(
    `.tiles[data-name="${name}"][data-row="${row}"][data-col="${col}"]`,
  );
  targetTiles.dataset.clicked = 'true';
};

export {
  createHeader,
  createMain,
  createFooter,
  createGameOver,
  createPlaceShips,
  changeColor,
};
