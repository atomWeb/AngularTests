import { FormBuilder } from '@angular/forms';
import { FormularioRegistro } from './formulario';

describe('Pruebas de Formulario', () => {
  let componente: FormularioRegistro;

  beforeEach(() => {
    componente = new FormularioRegistro(new FormBuilder());
  });

  it('should crear un formulario con dos campos', () => {
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });

  it('Email debe ser obligatorio', () => {
    const campo = componente.form.get('email');
    campo?.setValue('');
    expect(campo?.valid).toBeFalsy();
  });

  it('Email debe ser valido', () => {
    const campo = componente.form.get('email');
    campo?.setValue('cpg@gmail.com');
    expect(campo?.valid).toBeTruthy();
  });

});
