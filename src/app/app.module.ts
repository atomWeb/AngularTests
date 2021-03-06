import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedias/espias/medicos.component';
import { MedicoComponent } from './intermedias2/medico/medico.component';
import { HospitalComponent } from './intermedias2/hospital/hospital.component';
import { IncrementadorComponent } from './intermedias2/incrementador/incrementador.component';
import { RouterModule } from '@angular/router';
import { RUTAS } from './avanzadas/rutas/app.routes';
import { NavbarComponent } from './avanzadas/navbar/navbar.component';
import { RouterMedicoComponent } from './avanzadas/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(RUTAS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
