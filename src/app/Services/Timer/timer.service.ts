import {Injectable} from '@angular/core';
import {ProcessTime} from "../../Classes/ProcessTime";
import {interval, Observable, Subject, Subscription, takeUntil, tap} from "rxjs";
import {EjecucionService} from "../Estados/Ejecucion/ejecucion.service";
import {StateManagerService} from "../Estados/StateManager/state-manager.service";

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private destroy$ = new Subject<void>();
  private pausa$ = false;
  private tiempoSubject = new Subject<ProcessTime>();
  private tiempoSubscription: Subscription;

  public tiempoObservable: Observable<ProcessTime>;

  constructor(protected StateMangerService: StateManagerService) {
    this.tiempoObservable = this.tiempoSubject.asObservable();

    this.tiempoSubscription = interval(1000).pipe( // Intervalo de 10 milisegundos
      takeUntil(this.destroy$),
      tap(() => {
        if (this.pausa$) {
          this.incrementarSegundos();
          this.tiempoSubject.next(this.getTiempo());
        }
      })
    ).subscribe();
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
