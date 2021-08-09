import { getRobots } from './arrays';

describe('Prueba de Arrays', () => {
  it('Debe retornar al menos 3 robots', () => {
    const res = getRobots();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe existir MegaMan y Ultron', () => {
    const res = getRobots();
    expect(res).toContain("MegaMan");
    expect(res).toContain("Ultron");
  });

});
