import { Component } from '@angular/core';
import {NuevosService} from "../../../Services/Estados/Nuevo/nuevos.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {GeneralService} from "../../../Services/peticiones/general.service";
import {Proceso} from "../../../Classes/Peticiones/Proceso";
import {timeToString} from "../../../utils/TimeOperations";

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.css'
})
export class NuevoComponent {
  NuevosProcessList: Proceso[] = [];


  constructor(public generalService: GeneralService) {
  }

  protected readonly timeToString = timeToString;

  ngOnInit() {
    this.NuevosProcessList = this.generalService.processResult.procesosNuevos
  }
  printProceso(proceso: Proceso) {
    console.log(proceso)
    return "";
  }
}
