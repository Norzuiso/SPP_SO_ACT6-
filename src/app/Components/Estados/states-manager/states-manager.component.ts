import {Component} from '@angular/core';
import {NuevoComponent} from "../nuevo/nuevo.component";
import {AppModule} from "../../app.module";
import {GenerateDataService} from "../../../Services/Data/generate-data.service";
import {NuevosService} from "../../../Services/Estados/Nuevo/nuevos.service";
import {Process} from "../../../Classes/Process";
import {StateManagerService} from "../../../Services/Estados/StateManager/state-manager.service";
import {TerminadoService} from "../../../Services/Estados/Terminado/terminado.service";
import {GeneralService} from "../../../Services/peticiones/general.service";
import {interval, Subscription, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-states-manager',
  templateUrl: './states-manager.component.html',
  styleUrl: './states-manager.component.css'
})
export class StatesManagerComponent {
  subscription: Subscription;
  intervalId: any; // Almacena el identificador del intervalo

  constructor(
    public generalService: GeneralService
  ) {
  }


  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.llamarPeticion(); // Llama a tu función que realiza la petición HTTP
    }, 1000); // Llama cada segundo (1000 milisegundos)
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe(); // Cancela la suscripción cuando el componente se destruye
    }
  }
  detenerPeticion(): void {
    this.generalService.processResult.contadorGlobal--;
    clearInterval(this.intervalId); // Detiene el intervalo
  }
  llamarPeticion(): void {
    // Aquí llamas a tu función que realiza la petición HTTP utilizando tu servicio
    this.generalService.resolveProcess();
    if (this.generalService.isProgramTerminated()){
      this.detenerPeticion()
    }
  }
  isProgramTerminated() {

  }
}
