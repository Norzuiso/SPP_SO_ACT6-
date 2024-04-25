import {Component} from '@angular/core';
import {GeneralService} from "../../../Services/peticiones/general.service";
import {timeToString} from "../../../utils/TimeOperations";

@Component({
  selector: 'app-ejecucion',
  templateUrl: './ejecucion.component.html',
  styleUrl: './ejecucion.component.css'
})
export class EjecucionComponent {

  constructor(public generalService: GeneralService) {
  }

  protected readonly timeToString = timeToString;
}
