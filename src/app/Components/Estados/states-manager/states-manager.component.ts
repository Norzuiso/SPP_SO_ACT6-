import {Component} from '@angular/core';
import {NuevoComponent} from "../nuevo/nuevo.component";
import {AppModule} from "../../app.module";
import {GenerateDataService} from "../../../Services/Data/generate-data.service";
import {NuevosService} from "../../../Services/Estados/Nuevo/nuevos.service";
import {Process} from "../../../Classes/Process";
import {StateManagerService} from "../../../Services/Estados/StateManager/state-manager.service";

@Component({
  selector: 'app-states-manager',
  templateUrl: './states-manager.component.html',
  styleUrl: './states-manager.component.css'
})
export class StatesManagerComponent {
  ProcessList: Process[] = []

  constructor(
    protected stateManagerService: StateManagerService
  ) {
    this.ProcessList = stateManagerService.ProcessList

  }

}
