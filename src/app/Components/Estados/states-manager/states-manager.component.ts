import {Component, HostListener} from '@angular/core';
import {GeneralService} from "../../../Services/peticiones/general.service";

@Component({
  selector: 'app-states-manager',
  templateUrl: './states-manager.component.html',
  styleUrl: './states-manager.component.css'
})
export class StatesManagerComponent {
  intervalId: any; // Almacena el identificador del intervalo

  constructor(public generalService: GeneralService) {
  }

  // Método para detectar las teclas presionadas
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Aquí puedes manejar la lógica para cada tecla presionada
    this.generalService.state = event.key.toUpperCase();
  }

  ngOnInit(): void {
    this.iniciarPeticion();
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); // Detiene el intervalo al destruir el componente
  }

  iniciarPeticion(): void {
    this.intervalId = setInterval(() => {
      this.llamarPeticion();
    }, 1000);

  }

  llamarPeticion(): void {
    this.generalService.resolveProcess();
    if (this.generalService.isProgramTerminated) {
      clearInterval(this.intervalId); // Detiene el intervalo si el programa termina
    }
  }
}
