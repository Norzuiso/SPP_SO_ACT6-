import { Injectable } from '@angular/core';
import {Process} from "../../../Classes/Process";

@Injectable({
  providedIn: 'root'
})
export class ListosService {
  ListosProcessList: Process[] = []

  constructor() { }

  isListosEmty(){
    let isProcessListEmpty = false
    this.ListosProcessList.forEach((value, index) => {
      if (value.Operation === "") {
        isProcessListEmpty = true
      }
    })
    return isProcessListEmpty
  }
}
