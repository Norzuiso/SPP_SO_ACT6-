import { Component } from '@angular/core';
import {ListosService} from "../../../Services/Estados/Listos/listos.service";

@Component({
  selector: 'app-listos',
  templateUrl: './listos.component.html',
  styleUrl: './listos.component.css'
})
export class ListosComponent {

  // Espacio de memoria de 4 procesos

  constructor(protected listosService: ListosService) {
  }
}
