import {Component, HostListener} from '@angular/core';
import {EjecucionService} from "../../../Services/Estados/Ejecucion/ejecucion.service";
import {TimerService} from "../../../Services/Timer/timer.service";
import {StateManagerService} from "../../../Services/Estados/StateManager/state-manager.service";
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
