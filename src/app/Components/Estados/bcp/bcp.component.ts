import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {GeneralService} from "../../../Services/peticiones/general.service";
import {restTime, sumTimer, timeToString} from "../../../utils/TimeOperations";
import {Proceso} from "../../../Classes/Peticiones/Proceso";
import {ProcessTime} from "../../../Classes/ProcessTime";

@Component({
  selector: 'app-bcp',
  templateUrl: './bcp.component.html',
  styleUrl: './bcp.component.css'
})
export class BcpComponent {


  constructor(protected generalService: GeneralService) {
  }

  protected readonly timeToString = timeToString;

  calculateTiempoRespuesta(process: Proceso) {
    if (process.respuesta){
      const respuesta = restTime(process.tiempoRespuesta, process.tiempoLlegada)
      return timeToString(respuesta)
    }
    return timeToString(new ProcessTime())
  }

  calculateTiempoServicio(process: Proceso) {
    return timeToString(process.tiempoServicio);
  }
}
