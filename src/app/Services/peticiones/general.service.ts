import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProcessResult} from "../../Classes/Peticiones/ProcessResult";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  // prod url
  //private apiUrl = 'http://norsucio.com:8081/'; //prod act 8
  //private apiUrl = 'http://localhost:8081/'; //local act 8

  //private apiUrl = 'http://norsucio.com:8082/';  //prod act 10
  private apiUrl = 'http://localhost:8082/';  //local act 10

  public processResult: ProcessResult = new ProcessResult()
  public canWeStart: boolean = false;
  public isProgramTerminated: boolean = false;
  state: string;

  constructor(private http: HttpClient) {
  }

  generateProcess(quantity: number, quantumValue: number) {
    const url = `${this.apiUrl}generateProcess/${quantity}/${quantumValue}`;
    const req = this.http.get<any>(url);
    req.subscribe(data => {
      this.processResult = data
      this.canWeStart = true;
    })
  }


  resolveProcess() {
    const url = `${this.apiUrl}result/${this.state}`;
    const req = this.http.post<any>(url, this.processResult);
    req.subscribe(data => {
      this.processResult = data;
      this.isProgramTerminated = this.processResult.procesosEspera.length == 0
        && this.processResult.procesosBloqueados.procesosBloqueados.length == 0
        && this.processResult.procesoEnEjecucion.id == ""
      console.log("Estado cuando regresa: " + this.processResult.state)
    })
  }
}
