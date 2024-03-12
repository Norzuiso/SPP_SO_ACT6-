import { Injectable } from '@angular/core';
import {Process} from "../../../Classes/Process";

@Injectable({
  providedIn: 'root'
})
export class BloqueadoService {
  isBloqueadoListFull = false
  BloqueadoProcessList: Process[] = []
  constructor() { }
}
