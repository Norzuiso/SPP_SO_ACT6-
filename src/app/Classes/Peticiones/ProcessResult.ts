import {Proceso} from "./Proceso";
import {ProcesosBloqueados} from "./ProcesosBloqueados";

export class ProcessResult {
  state: string = ""
  contadorGlobal: number = 0
  processInMemory: number = 0
  procesosNuevos: Proceso[] = []
  procesosEspera: Proceso[] = []
  procesosBloqueados = new ProcesosBloqueados();
  procesoEnEjecucion = new Proceso();
  procesoTerminado: Proceso[] = []
}
