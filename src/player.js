import { Gameboard } from './gameboard.js';

const Player = (playerName) => {
  const gameboard = Gameboard();

  const getName = () => playerName;
  const getGameboard = () => gameboard;

  const placeShip = (ship) => {
    gameboard.placeShip(ship);
  };

  const attack = (enemy, coordinate) => {
    enemy.getGameboard().receiveAttack(coordinate);
  };

  return {
    getName,
    getGameboard,
    placeShip,
    attack,
  };
};

const Computer = (computerName) => {
  const gameboard = Gameboard();
  const attackLog = [];

  const getName = () => computerName;
  const getGameboard = () => gameboard;
  const getAttackLog = () => attackLog;

  const placeShip = (ship) => {
    gameboard.placeShip(ship);
  };

  const attack = (enemy, coordinate) => {
    enemy.getGameboard().receiveAttack(coordinate);
  };

  const findRandomCoordinate = () => {
    const randomCoordinate = [];
    while (true) {
      const xCoor = Math.floor(Math.random() * 10);
      const yCoor = Math.floor(Math.random() * 10);
      randomCoordinate[0] = xCoor;
      randomCoordinate[1] = yCoor;
      if (
        !attackLog.some(
          (coor) =>
            coor[0] === randomCoordinate[0] && coor[1] === randomCoordinate[1]
        )
      )
        break;
    }
    return randomCoordinate;
  };

  const computerAttack = (enemy, randomCoordinate) => {
    enemy.getGameboard().receiveAttack(randomCoordinate);
    attackLog.push(randomCoordinate);
    console.log(attackLog);
  };

  return {
    getName,
    getGameboard,
    getAttackLog,
    placeShip,
    attack,
    findRandomCoordinate,
    computerAttack,
  };
};

export { Player, Computer };
