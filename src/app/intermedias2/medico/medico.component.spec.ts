import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';

describe('Medico component', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService],
      imports: [HttpClientModule],
    });

    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
  });

  it('should crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('should retornar el nombre del medico', () => {
    const nombre = 'Juan';
    const resp = component.saludarMedico(nombre);
    expect(resp).toContain(nombre);
  });
});
