import {ProcessTime} from "../Classes/ProcessTime";

export function sumTimer(time1: ProcessTime, time2: ProcessTime): ProcessTime {
  let result: ProcessTime = new ProcessTime(0, 0);
  result.minutes = time1.minutes + time2.minutes
  result.seconds = time1.seconds + time2.seconds
  processSeconds(result);
  return result
}

export function restTime(time1: ProcessTime, time2: ProcessTime): ProcessTime {
  let result: ProcessTime = new ProcessTime(0, 0);
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
