import { Component } from '@angular/core';
import {BloqueadoService} from "../../../Services/Estados/Bloqueado/bloqueado.service";
import {GeneralService} from "../../../Services/peticiones/general.service";
import {timeToString} from "../../../utils/TimeOperations";

@Component({
  selector: 'app-bloqueado',
  templateUrl: './bloqueado.component.html',
  styleUrl: './bloqueado.component.css'
})
export class BloqueadoComponent {
  // Espacio de memoria de 4 procesos


  constructor(
    protected generalService: GeneralService
  ) {
  }

  protected readonly timeToString = timeToString;
}
