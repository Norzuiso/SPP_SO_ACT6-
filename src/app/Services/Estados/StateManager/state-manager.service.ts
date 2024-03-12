import {Injectable} from '@angular/core';
import {NuevosService} from "../Nuevo/nuevos.service";
import {GenerateDataService} from "../../Data/generate-data.service";
import {Process} from "../../../Classes/Process";
import {ListosService} from "../Listos/listos.service";
import {async} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {
  ProcessList: Process[] = []

  constructor(
    protected generateDataService: GenerateDataService,
    protected nuevosService: NuevosService,
    protected listosService: ListosService) {
    this.startProcess();
  }

  private startProcess() {
    this.ProcessList = this.generateDataService.ProcessList
    this.nuevosService.NuevosProcessList = this.ProcessList
    this.fillListos()
  }

  fillListos() {
    while (this.listosService.ListosProcessList.length != 4) {
      const group = this.ProcessList.shift()
      if (group) {
        this.listosService.ListosProcessList.push(group)
      }
    }
  }
}
