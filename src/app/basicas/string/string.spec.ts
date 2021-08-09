import { mensaje } from './string';

describe('Pruebas de strings', () => {
  it('should return un string', () => {
    const resp = mensaje('Cristian');
    expect(typeof resp).toBe('string');
  });

  it('should return un saludo con el nombre enviado', () => {
    // Esto es muy exacto solo para cuando sea necesario
    // const resp = mensaje('Cristian');
    // expect(resp).toBe('Saludos gran Cristian');
    const name = 'Cristian';
    const resp = mensaje(name);
    expect(resp).toContain(name);
  });
});
