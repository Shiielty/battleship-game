import { createHeader, createMain, createFooter } from './dom.js';
import { playerDefault, computerDefault } from './handler.js';

const currentTurn = 'player';

const start = () => {
  const content = document.querySelector('.content');
  content.replaceChildren(createHeader(), createMain(), createFooter());
};

const playerTurn = (row, col) => {
  computerDefault.getGameboard().receiveAttack([row, col]);
};

const computerTurn = () => {
  const randCoor = computerDefault.findRandomCoordinate();
  const [row, col] = randCoor;
  computerDefault.computerAttack(playerDefault, [row, col]);

  const targetTiles = document.querySelector(
    `.tiles[data-name="player"][data-row="${row}"][data-col="${col}"]`
  );
  targetTiles.style.backgroundColor = 'green';
};

const over = (winner) => {
  if (winner === 'player') {
    console.log('player win!');
  } else if (winner === 'computer') {
    console.log('computer win!');
  }
};

const game = {
  start,
  playerTurn,
  computerTurn,
  over,
};

export { game };
