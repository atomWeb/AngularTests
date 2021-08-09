import { userLogged } from './booleanos';

describe('Pruebas de booleanos', () => {
  it('should return true', () => {
    const resp = userLogged();
    // expect(resp).toEqual(true); // bien pero hay mas:
    // expect(resp).not.toBeFalsy();
    expect(resp).toBeTruthy();
  });
});
