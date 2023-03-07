import { Ships } from '../src/ships';
import { Player, Computer } from '../src/player';

describe('Player module tests', () => {
  let player;
  let player2;
  let cpu;
  let testShip1;
  let testShip2;
  let testShip3;

  beforeEach(() => {
    player = Player('human');
    player2 = Player('human 2');
    cpu = Computer('randomComputer');
    testShip1 = Ships([[0, 0]]);
    testShip2 = Ships([[7, 7]]);
    testShip3 = Ships([
      [1, 1],
      [1, 2],
      [1, 3],
    ]);
    player.placeShip(testShip1);
    player2.placeShip(testShip3);
    cpu.placeShip(testShip2);
  });
  it('check players name and each of their board', () => {
    expect(player.getName()).toEqual('human');
    expect(cpu.getName()).toEqual('randomComputer');
    expect(player.getGameboard()).toBeDefined();
    expect(cpu.getGameboard()).toBeDefined();
  });
  it('ship placed correctly for each player', () => {
    expect(player.getGameboard().getBoard()[0][0]).toEqual(testShip1);
    expect(cpu.getGameboard().getBoard()[7][7]).toEqual(testShip2);
  });
  it('player attack enemy', () => {
    player.attack(cpu, [7, 7]);
    expect(cpu.getGameboard().getBoard()[7][7].getHits()).toEqual(1);
    expect(cpu.getGameboard().isAllSunk()).toBeTruthy();
    cpu.attack(player, [3, 3]);
    expect(player.getGameboard().isAllSunk()).toBeFalsy();
    cpu.attack(player2, [1, 1]);
    cpu.attack(player2, [1, 3]);
    expect(player2.getGameboard().getDeployed()[0].getHits()).toEqual(2);
  });
  it('computer made a random attack', () => {
    const randCoor = cpu.findRandomCoordinate();
    cpu.computerAttack(player, randCoor);
    expect(cpu.getAttackLog()).toBeDefined();
  });
  it('computer made a random attack until player ships sunk', () => {
    while (!player.getGameboard().isAllSunk()) {
      const randCoor = cpu.findRandomCoordinate();
      cpu.computerAttack(player, randCoor);
    }
    expect(player.getGameboard().getBoard()[0][0].getHits()).toEqual(1);
  });
});
