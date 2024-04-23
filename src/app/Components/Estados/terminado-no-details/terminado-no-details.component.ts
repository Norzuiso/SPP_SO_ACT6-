import { Component } from '@angular/core';
import {GeneralService} from "../../../Services/peticiones/general.service";

@Component({
  selector: 'app-terminado-no-details',
  templateUrl: './terminado-no-details.component.html',
  styleUrl: './terminado-no-details.component.css'
})
export class TerminadoNoDetailsComponent {


  constructor(public generalService: GeneralService) {
  }
}
