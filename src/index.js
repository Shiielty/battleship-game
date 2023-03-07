import { playerDefault, computerDefault } from './handler.js';
import { game } from './game.js';

game.start();

const content = document.querySelector('.content');

content.addEventListener('click', (e) => {
  if (e.target.className === 'tiles' && e.target.dataset.clicked === 'false') {
    const { name } = e.target.dataset;
    const { row } = e.target.dataset;
    const { col } = e.target.dataset;

    if (name === 'computer') {
      game.playerTurn(row, col);
      if (computerDefault.getGameboard().isAllSunk()) {
        game.over('player');
      }

      // after player turn, computer will automatically play
      game.computerTurn();
      if (playerDefault.getGameboard().isAllSunk()) {
        game.over('computer');
      }
    }
    e.target.dataset.clicked = 'true';
  }
});
