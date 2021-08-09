import { Player } from './clase';

// Para saltar una prueba se coloca un x en el it xit o todas en el xdescribe
describe('Pruebas de clase juador', () => {
  let player = new Player();

  beforeAll(() => {});
  beforeEach(() => {
    player = new Player();
  });
  afterAll(() => {});
  afterEach(() => {});

  it('should return 80 de hp al recibir 20 de daño', () => {
    const resp = player.receiveDamage(20);
    expect(resp).toBe(80);
  });

  // // La instancia de la clase es una para todas las pruebas
  // it('should return 50 de hp al recibir 50 de daño', () => { // La prueba anterior ha quitado vida
  //   const resp = player.receiveDamage(50); // Esto falla
  //   expect(resp).toBe(50);
  // });

  // Solucionado con el beforeEach
  it('should return 50 de hp al recibir 50 de daño', () => {
    const resp = player.receiveDamage(50);
    expect(resp).toBe(50);
  });

  it('should return 0 de hp al recibir 150 de daño', () => {
    const resp = player.receiveDamage(150);
    expect(resp).toBe(0);
  });



});
