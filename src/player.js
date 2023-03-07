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

  const computerAttack = (enemy) => {
    const randomCoordinates = [];
    while (true) {
      const xCoor = Math.floor(Math.random() * 8);
      const yCoor = Math.floor(Math.random() * 8);
      randomCoordinates[0] = xCoor;
      randomCoordinates[1] = yCoor;
      if (!attackLog.includes(randomCoordinates)) break;
    }
    enemy.getGameboard().receiveAttack(randomCoordinates);
    attackLog.push(randomCoordinates);
  };

  return {
    getName,
    getGameboard,
    getAttackLog,
    placeShip,
    attack,
    computerAttack,
  };
};

export { Player, Computer };
