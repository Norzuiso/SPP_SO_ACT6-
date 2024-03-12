import { Component } from '@angular/core';
import {TimerService} from "../../../Services/Timer/timer.service";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {


  constructor(protected timerService: TimerService) {
    this.timerService.startTimer()
  }
}
