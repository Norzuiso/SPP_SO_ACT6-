import { Injectable } from '@angular/core';
import {NuevosService} from "../Nuevo/nuevos.service";
import {GenerateDataService} from "../../Data/generate-data.service";
import {Process} from "../../../Classes/Process";

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {
  ProcessList: Process[] = []

  constructor(
    protected generateData: GenerateDataService,
    protected nuevosService: NuevosService) {
    this.ProcessList = this.generateData.ProcessList

    this.nuevosService.NuevosProcessList = this.ProcessList


  }
}
