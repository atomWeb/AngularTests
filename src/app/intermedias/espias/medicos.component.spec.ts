import { Observable, of } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError } from 'rxjs';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  let servicio: MedicosService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', {
      post: of({}),
      get: of({}),
      delete: of({}),
    });
    servicio = new MedicosService(spy);
    componente = new MedicosComponent(servicio);
  });

  it('Init debe cargar los medicos', () => {
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      const medicos = ['Medico1', 'Medico2', 'Medico3'];
      return of([medicos]);
    });
    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Debe llamar al servidor para agregar un medico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake((medico) => {
      // return of({}); // esto funciona tb
      return empty(); // Esta esta bien pero ya esta deprecado
    });
    componente.agregarMedico();
    expect(espia).toHaveBeenCalled();
  });

  it('Debe agregar un medico al arreglo de medicos', () => {
    const medico = { id: 1, nombre: 'John Smith' };
    spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));
    componente.agregarMedico();
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla agregar un medico, mensajeError igual a error del servicio', () => {
    const myError = 'No se pudo agregar el medico';
    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(myError));
    componente.agregarMedico();
    expect(componente.mensajeError).toBe(myError);
  });

  it('Debe llamar al servicio para borrar un medico', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(of({}));
    componente.borrarMedico('1');
    expect(espia).toHaveBeenCalledWith('1');
  });

  it('No debe llamar al servicio para borrar un medico', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(of({}));
    componente.borrarMedico('1');
    expect(espia).not.toHaveBeenCalledWith('1');
  });
});
