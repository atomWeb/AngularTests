import { FormsModule } from '@angular/forms';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { By } from '@angular/platform-browser';

describe('Incremendator Component', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });

  it('Debe mostrar la leyenda', () => {
    component.leyenda = 'Progreso de la carga';
    fixture.detectChanges();
    const h3: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;
    expect(h3.innerHTML).toContain('Progreso de la carga');
  });

  it('Debe mostrar en el input el valor del progreso', () => {
    component.cambiarValor(5);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input: HTMLInputElement = fixture.debugElement.query(
        By.css('input')
      ).nativeElement;
      expect(input.value).toBe('55');
    });
  });

  it('Debe incrementar/decrementar en 5 con el botón  correspondiente', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

    botones[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);

    botones[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);
  });

  it('El titulo del componente, debe mostrar el progreso', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    botones[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    const h3: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;
    expect(h3.innerHTML).toContain('45');
  });
});
