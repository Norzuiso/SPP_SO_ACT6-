import {Component} from '@angular/core';
import {NuevoComponent} from "../nuevo/nuevo.component";
import {AppModule} from "../../app.module";
import {GenerateDataService} from "../../../Services/Data/generate-data.service";
import {NuevosService} from "../../../Services/Estados/Nuevo/nuevos.service";
import {Process} from "../../../Classes/Process";

@Component({
  selector: 'app-states-manager',
  templateUrl: './states-manager.component.html',
  styleUrl: './states-manager.component.css'
})
export class StatesManagerComponent {
  ProcessList: Process[] = []

  constructor(
    protected generateDataService: GenerateDataService,
    protected nuevosService: NuevosService
  ) {
    this.ProcessList = this.generateDataService.ProcessList
    this.nuevosService.NuevosProcessList = this.ProcessList

  }

}
