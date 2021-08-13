import { RUTAS } from "./app.routes"
import { MedicoComponent } from "src/app/intermedias2/medico/medico.component"

describe('Rutas principales', () => {

  it('should existir la ruta /medico/:id', () => {

    expect( RUTAS ).toContain({ path: 'medico/:id', component: MedicoComponent })
  })

})
