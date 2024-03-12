import {ProcessTime} from "./ProcessTime";
import {restTime, sumTimer} from "../utils/TimeOperations";

export class Process {
  ID: string = ""
  Operation: string = ""
  Result: string = "0"
  TiempoMaxEstimado: ProcessTime = new ProcessTime(0, 0)
  TiempoTranscurrido: ProcessTime = new ProcessTime(0, 0)

  // Hora en el que el proceso llego al sistema
  TiempoLlegada: ProcessTime = new ProcessTime(0, 0)

  // Hora en la que el proceso termino
  TiempoFinalizacion: ProcessTime = new ProcessTime(0, 0)

  // Tiempo total desde que el proceso llega hasta que termina
  TiempoRetorno: ProcessTime = new ProcessTime(0, 0)

  // Tiempo transcurrido desde que llega hasta que es atendido por primera vez
  TiempoRespuesta: ProcessTime = new ProcessTime(0, 0)

  // Tiempo que el proceso ha estado esperando para usar el procesador
  TiempoEspera: ProcessTime = new ProcessTime(0, 0)

  // Tiempo transcurrido en cola de bloqueado
  TiempoTranscurridoBloqueado: ProcessTime = new ProcessTime(0, 0)

  // Tiempo que el proceso ha estado dentro de ejecución.
  // Si termina bien entonces es TiempoMaxEstimado
  // Si no será TiempoTrans
  TiempoServicio: ProcessTime = new ProcessTime(0, 0)

  TiempoRestantePorEjecutar: ProcessTime = restTime(this.TiempoMaxEstimado, this.TiempoServicio)
}
