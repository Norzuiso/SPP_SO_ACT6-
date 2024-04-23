import { Injectable } from '@angular/core';
import {Process} from "../../../Classes/Process";

@Injectable({
  providedIn: 'root'
})
export class BloqueadoService {

  BloqueadoProcessList: Process[] = []
  tiempoEspera = 0;
  constructor() { }


  incrementTiempoEsperaBloqueado(){
    if (this.BloqueadoProcessList.length != 0){
      this.tiempoEspera++
    }
  }


  incrementBloqueado() {
    if (this.tiempoEspera > 8){
      this.tiempoEspera=0;
    }
    this.BloqueadoProcessList.forEach(value => {
      value.incrementTiempoTranscurridoBloqueado()
      value.incrementTiempoTranscurrido()
    })
  }

  isFreeToRemove() {
    return this.tiempoEspera == 8;
  }
}
