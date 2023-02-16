import { Ships } from "../src/ships";

describe('ship factory function', () => {
  let testShip;
  beforeEach(() => {
    testShip = Ships(3);
  });
  it('receive hit', () => {
    testShip.hit();
    expect(testShip.hits).toEqual(1)
  })
  it('receive multiple hits', () => {
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.hits).toEqual(3)
  })
  it('not sink if hits equal to ship length', () => {
    testShip.hit();
    expect(testShip.sink).toBeFalsy()
  })
  it('sink if hits equal to ship length', () => {
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.sink).toBeTruthy()
  })
})