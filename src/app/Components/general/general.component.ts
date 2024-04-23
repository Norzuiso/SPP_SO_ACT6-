import {Component, HostListener} from '@angular/core';
import {GenerateDataService} from "../../Services/Data/generate-data.service";
import {TimerService} from "../../Services/Timer/timer.service";
import {GeneralService} from "../../Services/peticiones/general.service";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {

  constructor(public generalService: GeneralService) {
  }

}
