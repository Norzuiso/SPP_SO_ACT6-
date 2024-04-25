import { Component } from '@angular/core';
import {GeneralService} from "../../../Services/peticiones/general.service";
import {timeToString} from "../../../utils/TimeOperations";

@Component({
  selector: 'app-listos',
  templateUrl: './listos.component.html',
  styleUrl: './listos.component.css'
})
export class ListosComponent {

  constructor(protected generalService: GeneralService) {
  }

  protected readonly timeToString = timeToString;
}
