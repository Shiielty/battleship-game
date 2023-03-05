import { Gameboard } from '../src/gameboard';
import { Ships } from '../src/ships';

describe('gameboard function factory', () => {
  let testGameboard;
  let testShip1;
  let testShip2;

  beforeEach(() => {
    testGameboard = Gameboard();
    testShip1 = Ships([[3, 3], [4, 3], [5, 3]]);
    testShip2 = Ships([[0, 1], [0, 2], [0, 3]]);
  });
  it('place ships at specific coordinates', () => {
    testGameboard.placeShip(testShip1);
    testGameboard.placeShip(testShip2);
    expect(testGameboard.whoIsIn([3, 3])).toEqual(testShip1);
    expect(testGameboard.whoIsIn([0, 3])).toEqual(testShip2);
    expect(testGameboard.whoIsIn([4, 3])).toEqual(testShip1);
    expect(testGameboard.whoIsIn([6, 3])).toEqual(null);
  });
  it('place ships at the board', () => {
    testGameboard.placeShip(testShip1);
    expect(testGameboard.getBoard()[3][3]).toEqual(testShip1);
    expect(testGameboard.getBoard()[4][3]).toEqual(testShip1);
    expect(testGameboard.getBoard()[5][3]).toEqual(testShip1);
  });
  it('receive attack at correct coordinate', () => {
    testGameboard.placeShip(testShip1);
    testGameboard.receiveAttack([3, 3]);
    expect(testShip1.getHits()).toBe(1);
  });
  it('receive attack at correct coordinate (2 ship)', () => {
    testGameboard.placeShip(testShip1);
    testGameboard.placeShip(testShip2);
    testGameboard.receiveAttack([0, 1]);
    testGameboard.receiveAttack([3, 3]);
    testGameboard.receiveAttack([5, 3]);
    expect(testShip1.getHits()).toBe(2);
    expect(testShip2.getHits()).toBe(1);
  });
  it('record the coordinate of the missed shots', () => {
    testGameboard.placeShip(testShip1);
    testGameboard.receiveAttack([0, 0]);
    expect(testShip1.getHits()).toEqual(0);
    expect(testGameboard.getMissedShots()).toEqual([[0, 0]]);
  });
  it('report if all the ships has been sunk', () => {
    testGameboard.placeShip(testShip1);
    testGameboard.placeShip(testShip2);
    testGameboard.receiveAttack([3, 3]);
    testGameboard.receiveAttack([4, 3]);
    testGameboard.receiveAttack([5, 3]);
    testGameboard.receiveAttack([0, 1]);
    testGameboard.receiveAttack([0, 2]);
    testGameboard.receiveAttack([0, 3]);
    expect(testGameboard.isAllSunk()).toBeTruthy();
  });
});
