import {Injectable} from '@angular/core';
import {Process} from "../../Classes/Process";
import {generateEstimatedTime, generateProcessFullOperation} from "../../utils/ProcessGenerationUtils";

@Injectable({
  providedIn: 'root'
})
export class GenerateDataService {
  ProcessList: Process[] = []
  isProcessListGenerated = true

  generateProcess(quantity: number) {
    let tempProcess = new Process()
    let fullOperation: any = {};
    for (let i = 0; i != quantity; i++) {
      tempProcess.ID = String(i)

      tempProcess.TiempoMaxEstimado = generateEstimatedTime()

      fullOperation = generateProcessFullOperation()
      tempProcess.Operation = fullOperation?.ope
      tempProcess.Result = fullOperation?.result

      this.ProcessList.push(tempProcess)
      tempProcess = new Process()
    }
    this.isProcessListGenerated = true
  }


  constructor() {
  }
}
