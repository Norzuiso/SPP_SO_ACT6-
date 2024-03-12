import {Injectable} from '@angular/core';
import {NuevosService} from "../Nuevo/nuevos.service";
import {GenerateDataService} from "../../Data/generate-data.service";
import {Process} from "../../../Classes/Process";
import {ListosService} from "../Listos/listos.service";
import {EjecucionService} from "../Ejecucion/ejecucion.service";
import {BloqueadoService} from "../Bloqueado/bloqueado.service";
import {TerminadoService} from "../Terminado/terminado.service";

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {
  ProcessList: Process[] = []

  constructor(
    protected generateDataService: GenerateDataService,
    protected nuevosService: NuevosService,
    protected listosService: ListosService,
    protected bloqueadoService: BloqueadoService,
    protected ejecucionService: EjecucionService,
    protected terminadoService: TerminadoService
  ) {
    this.startProcess();
  }

  incrementTimes() {
    this.ejecucionService.incrementEjecucion()
    if (this.isProcessInEjecucionDone()) {
      this.clearEjecucion()
    }
  }

  private startProcess() {
    this.ProcessList = this.generateDataService.ProcessList
    this.nuevosService.NuevosProcessList = this.ProcessList
    this.fillListos()
    this.fillEjecucion();
  }

  private fillEjecucion() {
    //Si el tamaño de la cola de bloqueados es igual a 4
    if (this.bloqueadoService.BloqueadoProcessList.length === 4) {
      // Tomamos el siguiente elemento desde ahí
      this.ejecucionService.EjecucionProcess = this.shiftProcessList(this.bloqueadoService.BloqueadoProcessList);
    } else {
      //Si no, tomamos el elemento de la categoría listo.
      this.ejecucionService.EjecucionProcess = this.shiftProcessList(this.listosService.ListosProcessList);
      this.fillListos()
    }
  }

  fillListos() {
    while (this.listosService.ListosProcessList.length != 4) {
      let process = this.shiftProcessList(this.ProcessList);
      this.listosService.ListosProcessList.push(process)
    }
  }

  private shiftProcessList(processes: Process[]) {
    let process: Process = new Process()
    const group = processes.shift()
    if (group) {
      process = group
    }
    return process;
  }

  isProcessInEjecucionDone() {
    return this.ejecucionService.EjecucionProcess.TiempoRestantePorEjecutar.toString() === "00:00"
  }


  isProgramFinish(): boolean {
    return this.nuevosService.NuevosProcessList.length == 0 &&
      this.listosService.isListosEmty() &&
      this.bloqueadoService.BloqueadoProcessList.length == 0
  }

  clearEjecucion() {
    this.terminadoService.TerminadoProcessList.push(this.ejecucionService.EjecucionProcess)
    this.terminadoService.isProgramTerminated = this.isProgramFinish()
    this.fillEjecucion()
  }
}
