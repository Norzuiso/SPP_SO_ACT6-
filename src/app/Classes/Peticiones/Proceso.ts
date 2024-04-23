import {ProcessTime} from "../ProcessTime";

export class Proceso {
  id = "";
  operation = "";
  result = "";
  llegada = false;
  tiempoMaxEstimado = new ProcessTime();
  tiempoTranscurrido = new ProcessTime();
  tiempoLlegada = new ProcessTime();
  tiempoFinalizacion = new ProcessTime();
  tiempoRetorno = new ProcessTime();
  tiempoRespuesta = new ProcessTime();
  tiempoBloqueado = new ProcessTime();
  tiempoServicio = new ProcessTime();
  tiempoRestantePorEjecutar = new ProcessTime();
}
