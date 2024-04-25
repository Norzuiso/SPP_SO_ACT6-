import {Component} from '@angular/core';
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
