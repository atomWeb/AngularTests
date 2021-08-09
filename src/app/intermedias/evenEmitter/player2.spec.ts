import { Player2 } from './player2';

describe('Player 2 Emit', () => {
  let player2: Player2;

  beforeEach(() => {
    player2 = new Player2();
  });

  it('should emitir un evento cuando recibe daño', () => {
    let newHP = 0;
    player2.hpChange.subscribe((hp) => {
      newHP = hp;
    });
    player2.receiveDamage(1000);
    expect(newHP).toBe(0);
  });
});
