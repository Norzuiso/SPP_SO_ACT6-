import { Component } from '@angular/core';
import {EjecucionService} from "../../../Services/Estados/Ejecucion/ejecucion.service";

@Component({
  selector: 'app-ejecucion',
  templateUrl: './ejecucion.component.html',
  styleUrl: './ejecucion.component.css'
})
export class EjecucionComponent {
  // Espacio de memoria de 4 procesos


  constructor(protected ejecucionService: EjecucionService) {
  }
}
