import {Proceso} from "./Proceso";
import {ProcesosBloqueados} from "./ProcesosBloqueados";

export class ProcessResult {
  State: string = "C"
  contadorGlobal: number = 0
  processInMemory: number = 0
  procesosNuevos: Proceso[] = []
  procesosEspera: Proceso[] = []
  procesosBloqueados = new ProcesosBloqueados();
  procesoEnEjecucion = new Proceso();
  procesoTerminado: Proceso[] = []
}
