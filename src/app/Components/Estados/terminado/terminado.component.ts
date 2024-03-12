import { Component } from '@angular/core';
import {Process} from "../../../Classes/Process";
import {TerminadoService} from "../../../Services/Estados/Terminado/terminado.service";

@Component({
  selector: 'app-terminado',
  templateUrl: './terminado.component.html',
  styleUrl: './terminado.component.css'
})
export class TerminadoComponent {

  constructor(protected terminadoService: TerminadoService) {
  }

}
