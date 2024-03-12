import { Component } from '@angular/core';
import {GenerateDataService} from "../../Services/Data/generate-data.service";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {

  constructor(public generateDataService: GenerateDataService) {
  }

}
