import { Component } from '@angular/core';
import {GeneralService} from "../../../Services/peticiones/general.service";
import {timeToString} from "../../../utils/TimeOperations";

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.css'
})
export class NuevoComponent {


  constructor(public generalService: GeneralService) {
  }

  protected readonly timeToString = timeToString;
}
