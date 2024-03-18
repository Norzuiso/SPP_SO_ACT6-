import {Injectable} from '@angular/core';
import {Process} from "../../../Classes/Process";
import {TimerService} from "../../Timer/timer.service";
import {restTime} from "../../../utils/TimeOperations";


@Injectable({
  providedIn: 'root'
})
export class EjecucionService {
  EjecucionProcess: Process = new Process()

  constructor() {
  }

  public incrementEjecucion(){
    this.EjecucionProcess.decrementTiempoPorEjecutar();
    this.EjecucionProcess.incrementTiempoTranscurrido()
    this.EjecucionProcess.incrementTiempoServicio()
  }

  calculateTimes() {
    this.EjecucionProcess.TiempoRetorno = restTime(this.EjecucionProcess.TiempoFinalizacion,
      this.EjecucionProcess.TiempoLlegada)
    this.EjecucionProcess.TiempoEspera = restTime(this.EjecucionProcess.TiempoRetorno,
      this.EjecucionProcess.TiempoServicio)

  }
}
