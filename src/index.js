import { game } from './game.js';

let [playerObj, computerObj] = game.initiatePlayer();
game.render(playerObj, computerObj);

let winner = '';

const content = document.querySelector('.content');

content.addEventListener('click', (e) => {
  if (e.target.className === 'tiles' && e.target.dataset.clicked === 'false') {
    const { name } = e.target.dataset;
    const { row } = e.target.dataset;
    const { col } = e.target.dataset;

    if (name === 'computer') {
      e.target.dataset.clicked = 'true';
      game.playerTurn(row, col, computerObj);
      if (computerObj.getGameboard().isAllSunk()) {
        winner = 'player';
        game.over(winner);
      }

      // after player turn, computer will automatically play
      game.computerTurn(computerObj, playerObj);
      if (playerObj.getGameboard().isAllSunk()) {
        winner = 'computer';
        game.over(winner);
      }
    }
  }

  if (e.target.className.includes('game-over-btn')) {
    winner = '';
    [playerObj, computerObj] = game.initiatePlayer();
    game.render(playerObj, computerObj);
  }
});
