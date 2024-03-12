import { Component } from '@angular/core';
import {NumOfProcessComponent} from "../num-of-process/num-of-process.component";
import {StatesManagerComponent} from "../Estados/states-manager/states-manager.component";
import {GenerateDataService} from "../../Services/Data/generate-data.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [
    NumOfProcessComponent,
    StatesManagerComponent,
    NgIf
  ],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {

  constructor(public generateDataService: GenerateDataService) {
  }

}
