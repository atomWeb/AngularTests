import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should de tener un link hacia la página de médicos', () => {
    const debugElements = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );
    // console.log(debugElements);
    let flag = false;
    debugElements.forEach((element: any) => {
      if (element.attributes['routerLink'] === '/medicos') {
        flag = true;
      }
    });
    expect(flag).toBeTruthy();
  });

  // it('should have a link to /', () => {
  //   const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
  //   const index = debugElements.findIndex(de => {
  //     return de.properties['href'] === '/';
  //   });
  //   expect(index).toBeGreaterThan(-1);
  // });
});
