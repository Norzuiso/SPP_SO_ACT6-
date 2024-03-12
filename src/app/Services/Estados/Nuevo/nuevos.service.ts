import { Injectable } from '@angular/core';
import {GenerateDataService} from "../../Data/generate-data.service";
import {Process} from "../../../Classes/Process";

@Injectable({
  providedIn: 'root'
})
export class NuevosService {
  NuevosProcessList: Process[] = []


  constructor() { }


}
