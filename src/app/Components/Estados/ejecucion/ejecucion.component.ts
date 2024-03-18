import {Component, HostListener} from '@angular/core';
import {EjecucionService} from "../../../Services/Estados/Ejecucion/ejecucion.service";
import {TimerService} from "../../../Services/Timer/timer.service";
import {StateManagerService} from "../../../Services/Estados/StateManager/state-manager.service";

@Component({
  selector: 'app-ejecucion',
  templateUrl: './ejecucion.component.html',
  styleUrl: './ejecucion.component.css'
})
export class EjecucionComponent {
  // Espacio de memoria de 4 procesos

  constructor(protected ejecucionService: EjecucionService,
              public timerService: StateManagerService) {
  }
  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    // Aquí puedes manejar la lógica cuando se presiona una tecla
    const data: string = event.key.toUpperCase();
    this.timerService.handleKeyDown(data)
  }
}
