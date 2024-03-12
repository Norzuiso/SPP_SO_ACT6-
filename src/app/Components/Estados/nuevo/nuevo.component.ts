import { Component } from '@angular/core';
import {NuevosService} from "../../../Services/Estados/Nuevo/nuevos.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.css'
})
export class NuevoComponent {


  constructor(protected nuevoService: NuevosService) {
  }
}
