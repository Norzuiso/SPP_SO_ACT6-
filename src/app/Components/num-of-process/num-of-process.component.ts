import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GeneralService} from "../../Services/peticiones/general.service";
import {generateJitFileUri} from "@angular-devkit/build-angular/src/tools/esbuild/angular/uri";

@Component({
  selector: 'app-num-of-process',
  templateUrl: './num-of-process.component.html',
  styleUrl: './num-of-process.component.css'
})
export class NumOfProcessComponent {
  constructor(private generateData: GeneralService) {
  }

  private processQuantity: number = 1;
  private quantumValue: number = 1;

  formGroup: FormGroup = new FormGroup({
    processQuantityFormControl: new FormControl(this.processQuantity, [
      Validators.required
    ]),
    quantumValueFormControl: new FormControl(this.quantumValue, [
      Validators.required
    ]),


  })

  generateJobs() {
    this.processQuantity = this.formGroup.getRawValue()["processQuantityFormControl"]
    this.quantumValue = this.formGroup.getRawValue()["quantumValueFormControl"]

    if (this.processQuantity <= 0) {
      alert("Cantidad de trabajos invalida. Tiene que ser mayor a 0")
    } else if(this.quantumValue <=0){
      alert("Valor de quantum invalido. Tiene que ser mayor a 0")
    } else {
      this.generateData.generateProcess(this.processQuantity, this.quantumValue)
    }
  }
}
