import {ProcessTime} from "./ProcessTime";
import {decrement, increment, restTime, sumTimer} from "../utils/TimeOperations";

export class Process {
  ID: string = ""
  Operation: string = ""
  Result: string = "0"
  TiempoMaxEstimado: ProcessTime = new ProcessTime()
  TiempoTranscurrido: ProcessTime = new ProcessTime()


  // Hora en el que el proceso llego al sistema
  TiempoLlegada: ProcessTime = new ProcessTime()
  isLlegada: boolean = false

  // Hora en la que el proceso termino
  TiempoFinalizacion: ProcessTime = new ProcessTime()

  // Tiempo total desde que el proceso llega hasta que termina
  TiempoRetorno: ProcessTime = new ProcessTime()
  incrementTiempoRetorno() {
      this.TiempoRetorno = increment(this.TiempoRetorno)

  }
  // Tiempo transcurrido desde que llega hasta que es atendido por primera vez
  TiempoRespuesta: ProcessTime = new ProcessTime()
  isWaitingAtendido: boolean = true;
  incrementTiempoRespuesta() {
    if(this.isWaitingAtendido){
      this.TiempoRespuesta = increment(this.TiempoRespuesta)
    }
  }

  // Tiempo que el proceso ha estado esperando para usar el procesador
  TiempoEspera: ProcessTime = new ProcessTime()
  incrementEspera() {
    this.TiempoEspera = increment(this.TiempoEspera)
  }

  // Tiempo transcurrido en cola de bloqueado
  TiempoTranscurridoBloqueado: ProcessTime = new ProcessTime()
  incrementTiempoTranscurridoBloqueado() {
    this.TiempoTranscurridoBloqueado = increment(this.TiempoTranscurridoBloqueado)
  }
  // Tiempo que el proceso ha estado dentro de ejecución.
  // Si termina bien entonces es TiempoMaxEstimado
  // Si no será TiempoTrans
  TiempoServicio: ProcessTime = new ProcessTime()
  incrementTiempoServicio() {
    this.TiempoServicio = increment(this.TiempoServicio)
  }
  TiempoRestantePorEjecutar: ProcessTime = new ProcessTime()
  decrementTiempoPorEjecutar() {
      this.TiempoRestantePorEjecutar = decrement(this.TiempoRestantePorEjecutar)
  }

  incrementTiempoTranscurrido() {
    this.TiempoTranscurrido = increment(this.TiempoTranscurrido)
  }
}
