import { Component } from '@angular/core';
import {GeneralService} from "../../../Services/peticiones/general.service";
import {processTimeFromSeconds, timeToString} from "../../../utils/TimeOperations";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {


  constructor(protected generalService: GeneralService) {
  }

  getContadorGlobalFormat() {
    const processTime = processTimeFromSeconds(this.generalService.processResult.contadorGlobal);

    return timeToString(processTime);
  }
}
