import { Ships } from '../src/ships';

describe('ship factory function', () => {
  let testShip;
  beforeEach(() => {
    testShip = Ships([[1, 3], [2, 3], [3, 3]]);
  });
  it('check if the coordinate recorded is correct', () => {
    expect(testShip.getCoor()).toEqual([[1, 3], [2, 3], [3, 3]]);
  });
  it('ships length equal to coordinates array.length', () => {
    expect(testShip.getLength()).toEqual(3);
  });
  it('receive hit', () => {
    testShip.hit();
    expect(testShip.getHits()).toEqual(1);
  });
  it('receive multiple hits', () => {
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.getHits()).toEqual(3);
  });
  it('not sink if hits equal to ship length', () => {
    testShip.hit();
    expect(testShip.isSunk()).toBeFalsy();
  });
  it('sink if hits equal to ship length', () => {
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBeTruthy();
  });
});
