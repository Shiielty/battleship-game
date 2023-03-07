const Gameboard = () => {
  const board = new Array(10).fill(null).map(() => Array(10).fill(null));
  const deployed = [];
  const missedShots = [];

  const getBoard = () => board;
  const getDeployed = () => deployed;
  const getMissedShots = () => missedShots;

  const placeShip = (ship) => {
    const shipCoordinate = ship.getCoor();
    shipCoordinate.forEach((coordinate) => {
      board[coordinate[0]][coordinate[1]] = ship;
    });
    deployed.push(ship);
  };

  const whoIsIn = (coordinate) => board[coordinate[0]][coordinate[1]];

  const receiveAttack = (coordinate) => {
    const inCoordinate = whoIsIn(coordinate);
    if (inCoordinate !== null) {
      inCoordinate.hit();
      console.log(`ships receive attack at ${coordinate}`);
    } else {
      missedShots.push(coordinate);
      console.log(`missed at ${coordinate}`);
    }
  };

  const isAllSunk = () => deployed.every((ship) => ship.isSunk() === true);

  return {
    getBoard,
    getDeployed,
    placeShip,
    whoIsIn,
    receiveAttack,
    getMissedShots,
    isAllSunk,
  };
};

export { Gameboard };
