import {ProcessTime} from "../Classes/ProcessTime";
import {Proceso} from "../Classes/Peticiones/Proceso";

export const processTimeOneSecond = new ProcessTime();

export function increment(time1: ProcessTime): ProcessTime {
  return sumTimer(time1, processTimeOneSecond)
}

export function decrement(time1: ProcessTime): ProcessTime {
  return restTime(time1, processTimeOneSecond)
}

export function sumTimer(time1: ProcessTime, time2: ProcessTime): ProcessTime {
  let result: ProcessTime = new ProcessTime();
  result.minutes = time1.minutes + time2.minutes
  result.seconds = time1.seconds + time2.seconds
  processSeconds(result);
  return result
}

export function restTime(time1: ProcessTime, time2: ProcessTime): ProcessTime {
  let result: ProcessTime = new ProcessTime();
  const totalSecondsTime1 = time1.seconds + (time1.minutes * 60)
  const totalSecondsTime2 = time2.seconds + (time2.minutes * 60)
  result.seconds = totalSecondsTime1 - totalSecondsTime2
  processSeconds(result);
  return result
}

export function processSeconds(result: ProcessTime) {
  if (result.seconds >= 60) {
    const x = result.seconds
    const resto = x % 60
    const cociente = Math.floor(x / 60)
    result.seconds = resto
    result.minutes += cociente
  }
}

export function processTimeFromSeconds(seconds: number) {
  let result = new ProcessTime()
  result.seconds = seconds
  processSeconds(result)
  return result
}

export function timeToString(processTime: ProcessTime): string {
  let timeStr: string = ""
  timeStr += processTime.minutes.toString().length === 1 ? "0" + processTime.minutes.toString() : processTime.minutes.toString()
  timeStr += processTime.seconds.toString().length === 1 ? ":0" + processTime.seconds.toString() : ":" + processTime.seconds.toString()
  return timeStr
}

export function calculateTiempoRespuesta(process: Proceso) {
  if (process.respuesta) {
    const respuesta = restTime(process.tiempoRespuesta, process.tiempoLlegada)
    return timeToString(respuesta)
  }
  return timeToString(new ProcessTime())
}

export function calculateTiempoServicio(process: Proceso) {
  return timeToString(process.tiempoServicio);
}

export function calculateTiempoTotalTranscurrido(process: Proceso) {
  const tiempoTranscurrido = process.tiempoTranscurrido;
  const tiempoEsperaPlusTiempoBloqueado = getTiempoEsperaPlusBloqueado(process);
  const tiempoEsperaTiempoBloqueadoTiempoTranscurrido = sumTimer(tiempoEsperaPlusTiempoBloqueado, tiempoTranscurrido);
  return timeToString(tiempoEsperaTiempoBloqueadoTiempoTranscurrido);
}

function getTiempoEsperaPlusBloqueado(process: Proceso) {
  const tiempoEspera = process.tiempoEspera;
  const tiempoBloqueado = process.tiempoBloqueado;
  return sumTimer(tiempoEspera, tiempoBloqueado);
}

export function calculateTiempoEspera(process: Proceso){
  const tiempoEsperaPlusTiempoBloqueado = getTiempoEsperaPlusBloqueado(process);
  return timeToString(tiempoEsperaPlusTiempoBloqueado)

}
