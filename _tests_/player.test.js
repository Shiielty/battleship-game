import { Ships } from '../src/ships';
import { Player, Computer } from '../src/player';

describe('Player module tests', () => {
  let player;
  let cpu;
  let testShip1;
  let testShip2;

  beforeEach(() => {
    player = Player('human');
    cpu = Computer('randomComputer');
    testShip1 = Ships([[0, 0]]);
    testShip2 = Ships([[7, 7]]);
    player.placeShip(testShip1);
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
    cpu.attack(player, [1, 1]);
    expect(player.getGameboard().isAllSunk()).toBeFalsy();
  });
  it('computer made a random attack', () => {
    cpu.computerAttack(player);
    expect(cpu.getAttackLog()).toBeDefined();
  });
  it('computer made a random attack until player ships sunk', () => {
    while (!player.getGameboard().isAllSunk()) {
      cpu.computerAttack(player);
    }
    expect(player.getGameboard().getBoard()[0][0].getHits()).toEqual(1);
  });
});
