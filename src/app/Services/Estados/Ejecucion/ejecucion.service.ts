import { Injectable } from '@angular/core';
import {Process} from "../../../Classes/Process";

@Injectable({
  providedIn: 'root'
})
export class EjecucionService {
  EjecucionProcess: Process = new Process()
  constructor() { }
}
