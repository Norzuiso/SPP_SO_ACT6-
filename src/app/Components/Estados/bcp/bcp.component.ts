import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {GeneralService} from "../../../Services/peticiones/general.service";
import {
  calculateTiempoRespuesta,
  calculateTiempoServicio,
  calculateTiempoTotalTranscurrido,
  calculateTiempoEspera,
  timeToString
} from "../../../utils/TimeOperations";

@Component({
  selector: 'app-bcp',
  templateUrl: './bcp.component.html',
  styleUrl: './bcp.component.css'
})
export class BcpComponent {


  constructor(protected generalService: GeneralService) {
  }

  protected readonly timeToString = timeToString;


  protected readonly calculateTiempoEspera = calculateTiempoEspera;
  protected readonly calculateTiempoRespuesta = calculateTiempoRespuesta;
  protected readonly calculateTiempoServicio = calculateTiempoServicio;
  protected readonly calculateTiempoTotalTranscurrido = calculateTiempoTotalTranscurrido;
}
