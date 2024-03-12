import {Injectable} from '@angular/core';
import {NuevosService} from "../Nuevo/nuevos.service";
import {GenerateDataService} from "../../Data/generate-data.service";
import {Process} from "../../../Classes/Process";
import {ListosService} from "../Listos/listos.service";
import {EjecucionService} from "../Ejecucion/ejecucion.service";
import {BloqueadoService} from "../Bloqueado/bloqueado.service";
import {TerminadoService} from "../Terminado/terminado.service";
import {subscribeToWorkflow} from "@angular/cli/src/command-builder/utilities/schematic-workflow";

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
    this.incrementEjecucion();
    this.incrementBloqueados()
  }

  private incrementEjecucion() {
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
    const group = this.listosService.ListosProcessList.shift()
    if (group) {
      this.ejecucionService.EjecucionProcess = group
    } else {
      this.ejecucionService.EjecucionProcess = new Process()
      this.terminadoService.isProgramTerminated = true
    }
  }

  fillListos() {
    this.addProcessToReadyList(this.nuevosService.NuevosProcessList);
    this.addProcessToReadyList(this.bloqueadoService.BloqueadoProcessList);
  }
  private addProcessToReadyList(sourceList: Process[]): void {
    while (sourceList.length > 0 && this.listosService.ListosProcessList.length < 5) {
      const processToAdd: Process = sourceList[0];
      if (processToAdd) {
        this.listosService.ListosProcessList.push(processToAdd);
        sourceList.shift();
      }
    }
  }
  isProcessInEjecucionDone() {
    return this.ejecucionService.EjecucionProcess.TiempoRestantePorEjecutar.seconds < 0
  }

  listsStatus = this.nuevosService.NuevosProcessList.length == 0 &&
    this.listosService.isListosEmty() &&
    this.bloqueadoService.BloqueadoProcessList.length == 0;

  isProgramFinish(): boolean {
    return this.listsStatus || this.ejecucionService.EjecucionProcess.Result == ""
  }

  clearEjecucion() {
    this.terminadoService.TerminadoProcessList.push(this.ejecucionService.EjecucionProcess)
    this.terminadoService.isProgramTerminated = this.isProgramFinish()
    this.fillListos()
    this.fillEjecucion()
  }


  Interrupcion() {
    this.bloqueadoService.isBloqueadoListFull = this.bloqueadoService.BloqueadoProcessList.length === 4
    this.bloqueadoService.BloqueadoProcessList.push(this.ejecucionService.EjecucionProcess)
    this.fillListos()
    this.fillEjecucion()
  }

  Error() {
    this.ejecucionService.EjecucionProcess.Result = "Error"
    this.terminadoService.TerminadoProcessList.push(this.ejecucionService.EjecucionProcess)
    this.fillListos()
    this.fillEjecucion()
  }

  private incrementBloqueados() {
    this.bloqueadoService.incrementBloqueado()
  }
}
