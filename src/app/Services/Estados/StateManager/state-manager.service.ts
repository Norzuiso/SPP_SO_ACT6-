import {forwardRef, Inject, Injectable} from '@angular/core';
import {NuevosService} from "../Nuevo/nuevos.service";
import {GenerateDataService} from "../../Data/generate-data.service";
import {Process} from "../../../Classes/Process";
import {ListosService} from "../Listos/listos.service";
import {EjecucionService} from "../Ejecucion/ejecucion.service";
import {BloqueadoService} from "../Bloqueado/bloqueado.service";
import {TerminadoService} from "../Terminado/terminado.service";
import {subscribeToWorkflow} from "@angular/cli/src/command-builder/utilities/schematic-workflow";
import {TimerService} from "../../Timer/timer.service";
import {interval, takeUntil, tap} from "rxjs";
import {restTime} from "../../../utils/TimeOperations";

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
    protected terminadoService: TerminadoService,
    protected timerService: TimerService
  ) {
    this.startProcess();

    this.timerService.tiempoSubscription = interval(1000).pipe( // Intervalo de 10 milisegundos
      takeUntil(this.timerService.destroy$),
      tap(() => {
        if (this.timerService.pausa$ && !this.terminadoService.isProgramTerminated) {
          this.incrementTimes()
          this.timerService.incrementarSegundos();
          this.timerService.tiempoSubject.next(this.timerService.getTiempo());
        }
      })
    ).subscribe();
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
      if (group.isWaitingAtendido){
        group.isWaitingAtendido = false
        group.TiempoRespuesta = this.timerService.getTiempo()
      }
        this.ejecucionService.EjecucionProcess = group
    } else {
      this.ejecucionService.EjecucionProcess = new Process()
      this.terminadoService.isProgramTerminated = true
    }
  }

  fillListos() {
    if (this.bloqueadoService.BloqueadoProcessList.length==5){
      this.addProcessToReadyList(this.bloqueadoService.BloqueadoProcessList);
    }else{
      this.addProcessToReadyList(this.nuevosService.NuevosProcessList);
    }
    this.addProcessToReadyList(this.bloqueadoService.BloqueadoProcessList);
  }
  private addProcessToReadyList(sourceList: Process[]): void {
    while (sourceList.length > 0 && this.listosService.ListosProcessList.length < 5) {
      const processToAdd: Process = sourceList[0];
      if (processToAdd) {
        // Aquí se agrega el tiempo de llegada
        if (!processToAdd.isLlegada){
          processToAdd.TiempoLlegada = this.timerService.getTiempo()
          processToAdd.isLlegada = true
        }
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
    this.ejecucionService.EjecucionProcess.TiempoFinalizacion = this.timerService.getTiempo()
    this.ejecucionService.calculateTimes()
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
    this.clearEjecucion()
  }

  private incrementBloqueados() {
    this.bloqueadoService.incrementBloqueado()
  }
  keyStatus = 'C'
  // Método para manejar el evento de tecla presionada
  public handleKeyDown(key: string): void {
    console.log("Se apachurro" + key)
    switch (key) {
      case 'P':
        if (this.keyStatus == 'P') {
          break
        }
        this.keyStatus = key
        this.timerService.stopTimer()

        break;
      case 'C':
        if (this.keyStatus == 'P') {
          this.keyStatus = key;
          this.timerService.startTimer();
        }
        break;
      case 'E':
        if (this.keyStatus != "P") {
          this.keyStatus = "C"
          this.Interrupcion()
        }
        break;
      case 'W':
        if (this.keyStatus != "P") {
          this.keyStatus = 'C'
          this.Error()
        }
        break;
    }
  }
}
