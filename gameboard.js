const Gameboard = () => {
  const board = new Array(8).fill(null).map(() => Array(8).fill(null));
  const deployed = []
  const missedShots = []

  const getBoard = () => board
  const getDeployed = () => deployed
  const getMissedShots = () => missedShots

  const placeShip = (ship) => {
    let shipCoordinate = ship.getCoor();
    shipCoordinate.forEach(coordinate => {
      board[coordinate[0]][coordinate[1]] = ship
    })
    deployed.push(ship)
  }

  const whoIsIn = (coordinate) => {
    return board[coordinate[0]][coordinate[1]]
  }

  const receiveAttack = (coordinate) => {
    const inCoordinate = whoIsIn(coordinate);
    if (inCoordinate !== null) {
      inCoordinate.hit()
    } else {
      missedShots.push(coordinate)
    }
  }

  const isAllSunk = () => {
    return deployed.every(ship => ship.isSunk() === true)
  }

  return {
    getBoard,
    getDeployed,
    placeShip,
    whoIsIn,
    receiveAttack,
    getMissedShots,
    isAllSunk
  }
}

export { Gameboard }