import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  @Input()
  nuevo : Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }
  
  constructor() {
  }
}
