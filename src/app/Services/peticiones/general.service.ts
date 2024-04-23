import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProcessResult} from "../../Classes/Peticiones/ProcessResult";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private apiUrl = 'http://localhost:8080/';
  public processResult: ProcessResult = new ProcessResult()
  public canWeStart: boolean = false;

  constructor(private http: HttpClient) {
  }

  generateProcess(quantity: number) {
    const url = `${this.apiUrl}generateProcess/${quantity}`;
    const req = this.http.get<any>(url);
    req.subscribe(data => {
      this.processResult = data
      this.canWeStart = true;
    })
  }


  isProgramTerminated() {
    return this.processResult.processInMemory == 0;
  }

  resolveProcess() {
    const url = `${this.apiUrl}result`;
    const req = this.http.post<any>(url, this.processResult);
    req.subscribe(data => {
      this.processResult = data;
    })
  }
}
