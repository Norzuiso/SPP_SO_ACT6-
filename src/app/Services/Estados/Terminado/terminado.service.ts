import { Injectable } from '@angular/core';
import {Process} from "../../../Classes/Process";

@Injectable({
  providedIn: 'root'
})
export class TerminadoService {

  TerminadoProcessList: Process[] = []
  isProgramTerminated: boolean = false;

  constructor() { }
}
