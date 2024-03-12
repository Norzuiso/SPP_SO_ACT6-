import {ProcessTime} from "../Classes/ProcessTime";
import {Process} from "../Classes/Process";


const operands: string [] = ['+', '-', '*', '/', '%']

export function generateProcessFullOperation(): any {
  let ope = generateOperation()
  let result: string = eval(ope)

  return {"ope": ope, "result": result};
}

export function generateOperation() {
  let randomIntA = generateRandomInt(1, 99);
  let randomOperandID = generateRandomInt(0, operands.length)
  let randomOperandStr: string = operands[randomOperandID]
  let randomIntB = generateRandomInt(1, 99);

  return String(randomIntA) + " " + randomOperandStr + " " + String(randomIntB)
}

export function generateRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export function generateEstimatedTime(): ProcessTime {
  let seconds = generateRandomInt(5, 19);
  return new ProcessTime(0, seconds);
}
