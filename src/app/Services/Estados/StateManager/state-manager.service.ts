import {Injectable} from '@angular/core';
import {NuevosService} from "../Nuevo/nuevos.service";
import {GenerateDataService} from "../../Data/generate-data.service";
import {Process} from "../../../Classes/Process";
import {ListosService} from "../Listos/listos.service";
import {async} from "rxjs";
import {EjecucionService} from "../Ejecucion/ejecucion.service";

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {
  ProcessList: Process[] = []

  constructor(
    protected generateDataService: GenerateDataService,
    protected nuevosService: NuevosService,
    protected listosService: ListosService,
    protected ejecucionService: EjecucionService
  ) {
    this.startProcess();
  }

  private startProcess() {
    this.ProcessList = this.generateDataService.ProcessList
    this.nuevosService.NuevosProcessList = this.ProcessList
    this.ejecucionService.EjecucionProcess = this.shiftProcessList();
    this.fillListos()
  }

  fillListos() {
    while (this.listosService.ListosProcessList.length != 4) {
      let process = this.shiftProcessList();
      this.listosService.ListosProcessList.push(process)
    }
  }

  private shiftProcessList() {
    let process: Process = new Process()
    const group = this.ProcessList.shift()
    if (group) {
      process = group
    }
    return process;
  }
}
