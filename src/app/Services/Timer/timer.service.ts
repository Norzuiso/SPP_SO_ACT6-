import {HostListener, Injectable} from '@angular/core';
import {ProcessTime} from "../../Classes/ProcessTime";
import {fromEvent, interval, Observable, Subject, Subscription, switchMap, takeUntil, tap} from "rxjs";
import {EjecucionService} from "../Estados/Ejecucion/ejecucion.service";
import {StateManagerService} from "../Estados/StateManager/state-manager.service";
import {TerminadoService} from "../Estados/Terminado/terminado.service";

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private destroy$ = new Subject<void>();
  private pausa$ = false;
  private tiempoSubject = new Subject<ProcessTime>();
  private tiempoSubscription: Subscription;
  private teclaPresionada$ = new Subject<KeyboardEvent>();

  public tiempoObservable: Observable<ProcessTime>;

  constructor(protected StateMangerService: StateManagerService,
              protected terminadoService: TerminadoService) {
    this.tiempoObservable = this.tiempoSubject.asObservable();

    this.tiempoSubscription = interval(1000).pipe( // Intervalo de 10 milisegundos
      takeUntil(this.destroy$),
      tap(() => {
        if (this.pausa$ && !this.terminadoService.isProgramTerminated) {

          this.incrementarSegundos();
          this.tiempoSubject.next(this.getTiempo());
        }
      })
    ).subscribe();
  }
  keyStatus = 'C'
  // Método para manejar el evento de tecla presionada
  public handleKeyDown(key: string): void {
    console.log("Se apachurro" + key)
    switch (key) {
      case 'P':
        if (this.keyStatus == 'P') {
          break
        }
        this.keyStatus = key
        this.stopTimer()

        break;
      case 'C':
        if (this.keyStatus == 'P') {
          this.keyStatus = key;
          this.startTimer();
        }
        break;
      case 'E':
        if (this.keyStatus != "P") {
          this.keyStatus = "C"
          this.StateMangerService.Interrupcion()
        }
        break;
      case 'W':
        if (this.keyStatus != "P") {
          this.keyStatus = 'C'
          this.StateMangerService.Error()
        }
        break;
    }
  }
  getTeclaPresionada(): Observable<KeyboardEvent> {
    console.log(this.teclaPresionada$.asObservable())
    return this.teclaPresionada$.asObservable();
  }
  getTiempo(): ProcessTime {
    return new ProcessTime(this.minutos, this.segundos);
  }

  reiniciarTiempo() {
    this.minutos = 0;
    this.segundos = 0;
  }

  stopTimer() {
    this.pausa$ = false;
  }

  startTimer() {
    this.pausa$ = true;
  }

  private minutos: number = 0;
  private segundos: number = 0;

  private incrementarSegundos() {

    this.StateMangerService.incrementTimes()
    this.segundos++;

    if (this.segundos === 60) {
      this.segundos = 0;
      this.incrementarMinutos();
    }
  }


  private incrementarMinutos() {
    this.minutos++;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.tiempoSubscription.unsubscribe();
  }

}
