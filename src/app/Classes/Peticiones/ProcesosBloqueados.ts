import {Proceso} from "./Proceso";

export class ProcesosBloqueados {
  tiempoParaSalirNuevo = 0;
  procesosBloqueados: Proceso[] = [];
  tenemosBloqueados = this.procesosBloqueados.length != 0;

  //    private Integer
  //     private List<Proceso> procesosBloqueados = new ArrayList<>();
  //     private Boolean tenemosBloqueados = !procesosBloqueados.isEmpty();

}
