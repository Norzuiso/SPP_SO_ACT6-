import {Component, HostListener} from '@angular/core';
import {GeneralService} from "../../../Services/peticiones/general.service";
import {timeToString} from "../../../utils/TimeOperations";

@Component({
  selector: 'app-ejecucion',
  templateUrl: './ejecucion.component.html',
  styleUrl: './ejecucion.component.css'
})
export class EjecucionComponent {
  // Espacio de memoria de 4 procesos

  constructor(public generalService: GeneralService) {
  }

  protected readonly timeToString = timeToString;
}
