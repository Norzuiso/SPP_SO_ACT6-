import {Component} from '@angular/core';
import {Process} from "../../../Classes/Process";
import {TerminadoService} from "../../../Services/Estados/Terminado/terminado.service";
import {GeneralService} from "../../../Services/peticiones/general.service";
import {sumTimer, timeToString} from "../../../utils/TimeOperations";
import {ProcessTime} from "../../../Classes/ProcessTime";

@Component({
  selector: 'app-terminado',
  templateUrl: './terminado.component.html',
  styleUrl: './terminado.component.css'
})
export class TerminadoComponent {

  constructor(protected generalService: GeneralService) {
  }

  protected readonly timeToString = timeToString;

  calculateLlegada() {
    return "";
  }

  calculateTiempoServicio() {
    let result = new ProcessTime();
    this.generalService.processResult.procesoTerminado.forEach((value, index) => result = sumTimer(result, value.tiempoServicio))
    return timeToString(result);
  }

  calculateTiempoTotalTrans() {
    let result = new ProcessTime();
    this.generalService.processResult.procesoTerminado.forEach((value, index) => result = sumTimer(result, value.tiempoTranscurrido))
    return timeToString(result);
  }
}
