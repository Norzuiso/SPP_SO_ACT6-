import {Component} from '@angular/core';
import {GeneralService} from "../../../Services/peticiones/general.service";
import {
  calculateTiempoEspera,
  calculateTiempoTotalTranscurrido,
  calculateTiempoRespuesta,
  timeToString
} from "../../../utils/TimeOperations";

@Component({
  selector: 'app-terminado',
  templateUrl: './terminado.component.html',
  styleUrl: './terminado.component.css'
})
export class TerminadoComponent {

  constructor(protected generalService: GeneralService) {
  }

  protected readonly timeToString = timeToString;


  protected readonly calculateTiempoTotalTranscurrido = calculateTiempoTotalTranscurrido;
  protected readonly calculateTiempoEspera = calculateTiempoEspera;
  protected readonly calculateTiempoRespuesta = calculateTiempoRespuesta;
}
