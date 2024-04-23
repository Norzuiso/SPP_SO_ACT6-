import { Component } from '@angular/core';
import {ListosService} from "../../../Services/Estados/Listos/listos.service";
import {GeneralService} from "../../../Services/peticiones/general.service";
import {timeToString} from "../../../utils/TimeOperations";

@Component({
  selector: 'app-listos',
  templateUrl: './listos.component.html',
  styleUrl: './listos.component.css'
})
export class ListosComponent {

  // Espacio de memoria de 4 procesos

  constructor(protected generalService: GeneralService) {
  }

  protected readonly timeToString = timeToString;
}
