export class ProcessTime {
  minutes: number = 0
  seconds: number = 0

  constructor(minutes: number, seconds: number) {
    this.minutes = minutes;
    this.seconds = seconds;
  }

  toString(): string {
    let timeStr: string = ""
    timeStr += this.minutes.toString().length === 1 ? "0" + this.minutes.toString() : this.minutes.toString()
    timeStr += this.seconds.toString().length === 1 ? ":0" + this.seconds.toString() : ":" + this.seconds.toString()
    return timeStr
  }
}
