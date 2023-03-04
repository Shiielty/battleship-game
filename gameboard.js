const Gameboard = () => {
  // const board = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],
  //                [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],
  //                [0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],
  //                [0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],
  //                [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],
  //                [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],
  //                [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],
  //                [0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7]]
  const deployed = []
  const record = []

  const getDeployed = () => deployed
  const getRecord = () => record

  const placeShip = (ship) => {
    deployed.push(ship)
  }

  const whoIsIn = (coordinate) => {
    return deployed.find(ship => {
      return ship.getCoor().some(coor => coor[0] === coordinate[0] && coor[1] === coordinate[1])
    })
  }

  const receiveAttack = (coordinate) => {
    const inCoordinate = whoIsIn(coordinate);
    if (inCoordinate !== undefined) {
      inCoordinate.hit()
    }
    record.push(coordinate)
  }

  const isAllSunk = () => {
    return deployed.every(ship => ship.isSunk() === true)
  }

  return {
    getDeployed,
    placeShip,
    whoIsIn,
    receiveAttack,
    getRecord,
    isAllSunk
  }
}

export { Gameboard }