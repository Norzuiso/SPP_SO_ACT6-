import { Component } from '@angular/core';
import {TimerService} from "../../../Services/Timer/timer.service";
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

  protected readonly timeToString = timeToString;
  protected readonly processTimeFromSeconds = processTimeFromSeconds;
}
