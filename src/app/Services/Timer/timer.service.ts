import {forwardRef, HostListener, Inject, Injectable} from '@angular/core';
import {ProcessTime} from "../../Classes/ProcessTime";
import {fromEvent, interval, Observable, Subject, Subscription, switchMap, takeUntil, tap} from "rxjs";
import {EjecucionService} from "../Estados/Ejecucion/ejecucion.service";
import {StateManagerService} from "../Estados/StateManager/state-manager.service";
import {TerminadoService} from "../Estados/Terminado/terminado.service";

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  destroy$ = new Subject<void>();
  pausa$ = false;
  tiempoSubject = new Subject<ProcessTime>();
  tiempoSubscription: Subscription;
  private teclaPresionada$ = new Subject<KeyboardEvent>();

  public tiempoObservable: Observable<ProcessTime>;

  constructor(protected terminadoService: TerminadoService) {
    this.tiempoObservable = this.tiempoSubject.asObservable();
  }
  getTiempo(): ProcessTime {
    return new ProcessTime();
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

  public incrementarSegundos() {
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
