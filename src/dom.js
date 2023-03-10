const createHeader = () => {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent = 'BATTLESHIP';
  header.appendChild(h1);

  return header;
};

const createGameboard = (player, hasHiddenTiles = false) => {
  const playerBoard = player.getGameboard().getBoard();

  const gameboard = document.createElement('div');
  gameboard.classList.add('gameboard');

  playerBoard.forEach((row, rowIndex) => {
    row.forEach((column, colIndex) => {
      const tiles = document.createElement('div');
      tiles.classList.add('tiles');
      if (column !== null && player.getName() === 'player') {
        tiles.classList.add('occupied');
      }
      tiles.dataset.name = player.getName();
      tiles.dataset.col = colIndex;
      tiles.dataset.row = rowIndex;
      tiles.dataset.clicked = 'false';

      if (hasHiddenTiles) {
        for (let i = 0; i < 3; i++) {
          const hiddenTiles = document.createElement('div');
          hiddenTiles.classList.add('hidden-tiles');
          tiles.appendChild(hiddenTiles);
        }
      }

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
  // const playerTitle = document.createElement('h2');
  // const computerTitle = document.createElement('h2');
  const playerGameboard = createGameboard(player);
  const computerGameboard = createGameboard(computer);

  // playerTitle.textContent = 'Player';
  // computerTitle.textContent = 'Computer';

  // playerSide.appendChild(playerTitle);
  playerSide.appendChild(playerGameboard);
  // computerSide.appendChild(computerTitle);
  computerSide.appendChild(computerGameboard);
  main.appendChild(playerSide);
  main.appendChild(computerSide);

  return main;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  footer.innerHTML =
    'Created by <a href="https://github.com/Shiielty/">Shiielty</a> | <a href="https://github.com/Shiielty/battleship">Source Code<img src="./GitHub-Mark-32px.png" alt="github"></a> </p>';

  return footer;
};

const createGameOver = (winner) => {
  const gameOver = document.createElement('div');
  const blurBg = document.createElement('div');
  const textBox = document.createElement('div');
  const btn = document.createElement('button');

  gameOver.classList.add('game-over');
  blurBg.classList.add('blur-bg');
  btn.classList.add('btn');
  btn.classList.add('game-over-btn');

  if (winner === 'player') {
    textBox.textContent = 'YOU WIN!';
  } else {
    textBox.textContent = 'YOU WIN!';
  }
  btn.textContent = 'Play Again';

  textBox.appendChild(btn);
  gameOver.appendChild(blurBg);
  gameOver.appendChild(textBox);

  return gameOver;
};

const createPlaceShips = (player) => {
  const placeShips = document.createElement('main');
  const h2 = document.createElement('h2');
  const rotateBtn = document.createElement('button');
  const gameBoard = createGameboard(player, true);

  h2.textContent = '"PLACE YOUR SHIPS!"';
  rotateBtn.textContent = 'ROTATE';

  placeShips.classList.add('place-ships');
  rotateBtn.classList.add('rotate-btn');

  placeShips.appendChild(h2);
  placeShips.appendChild(rotateBtn);
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
