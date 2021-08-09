import { increment } from './numeros';

describe('Pruebas de números', () => {
  it('should return 100 si el numero ingresado es mayor que 100', () => {
    const resp = increment(101);
    expect(resp).toEqual(100);
  });

  it('should return numero  + 1 si el numero ingresado es menor que 100', () => {
    const resp = increment(100);
    expect(resp).toEqual(101);
  });


});
