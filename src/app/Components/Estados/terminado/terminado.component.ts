import {Component} from '@angular/core';
import {GeneralService} from "../../../Services/peticiones/general.service";
import {restTime, sumTimer, timeToString} from "../../../utils/TimeOperations";
import {ProcessTime} from "../../../Classes/ProcessTime";
import {Proceso} from "../../../Classes/Peticiones/Proceso";

@Component({
  selector: 'app-terminado',
  templateUrl: './terminado.component.html',
  styleUrl: './terminado.component.css'
})
export class TerminadoComponent {

  constructor(protected generalService: GeneralService) {
  }

  protected readonly timeToString = timeToString;


  calculateTiempoServicio() {
    let result = new ProcessTime();
    this.generalService.processResult.procesoTerminado.forEach((value, index) => result = sumTimer(result, value.tiempoServicio))
    return timeToString(result);
  }

  calculateTiempoRetorno() {
    let result = new ProcessTime();
    this.generalService.processResult.procesoTerminado.forEach((value, index) => result = sumTimer(result, value.tiempoRetorno))
    return timeToString(result);  }

  calculateTiempoRespuesta(process: Proceso) {
    if (process.respuesta){
      const respuesta = restTime(process.tiempoRespuesta, process.tiempoLlegada)
      return timeToString(respuesta)
    }
    return timeToString(new ProcessTime())
  }
}
