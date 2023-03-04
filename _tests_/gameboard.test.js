import { Gameboard } from "../src/gameboard";
import { Ships } from "../src/ships";

describe('gameboard function factory', () => {
  let testGameboard;

  beforeEach(() => {
    testGameboard = Gameboard();
  });

  it('place ships at specific coordinates', () => {
    const testShip = Ships([[3,3],[4,3],[5,3]]);
    const testShip2 = Ships([[0,1],[0,2],[0,3]]);
    testGameboard.placeShip(testShip);
    testGameboard.placeShip(testShip2);
    expect(testGameboard.whoIsIn([3,3])).toEqual(testShip)
    expect(testGameboard.whoIsIn([0,3])).toEqual(testShip2)
    expect(testGameboard.whoIsIn([4,3])).toEqual(testShip)
    expect(testGameboard.whoIsIn([6,3])).toEqual(undefined)
  })
  
  it('receive attack at correct coordinate', () => {
    const testShip = Ships([[1,3],[2,3],[3,3]]);
    testGameboard.placeShip(testShip);
    testGameboard.receiveAttack([1,3]);
    expect(testShip.getHits()).toBe(1);
  })
  it('receive attack at correct coordinate (2 ship)', () => {
    const testShip = Ships([[1,3],[2,3],[3,3]]);
    const testShip2 = Ships([[3,4],[4,4],[5,4]]);
    testGameboard.placeShip(testShip);
    testGameboard.placeShip(testShip2);
    testGameboard.receiveAttack([1,3]);
    testGameboard.receiveAttack([4,4]);
    testGameboard.receiveAttack([5,4]);
    expect(testShip.getHits()).toBe(1);
    expect(testShip2.getHits()).toBe(2);
  })
  it('record the coordinate of the missed shots', () => {
    const testShip = Ships([[1,1]])
    testGameboard.placeShip(testShip)
    testGameboard.receiveAttack([0,0])
    expect(testShip.getHits()).toEqual(0)
    expect(testGameboard.getRecord()).toEqual([[0,0]])
  }) 

  it('report if all the ships has been sunk', () => {
    const testShip = Ships([[0,0],[0,1]]);
    const testShip2 = Ships([[3,3]]);
    testGameboard.placeShip(testShip);
    testGameboard.placeShip(testShip2);
    testGameboard.receiveAttack([0,0]);
    testGameboard.receiveAttack([3,3]);
    testGameboard.receiveAttack([0,1]);
    expect(testGameboard.isAllSunk()).toBeTruthy()
  })
})