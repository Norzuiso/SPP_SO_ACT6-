import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GeneralService} from "../../Services/peticiones/general.service";

@Component({
  selector: 'app-num-of-process',
  templateUrl: './num-of-process.component.html',
  styleUrl: './num-of-process.component.css'
})
export class NumOfProcessComponent {
  constructor(private generateData: GeneralService) {
  }

  private processQuantity: number = 1;

  formGroup: FormGroup = new FormGroup({
    processQuantityFormControl: new FormControl(this.processQuantity, [
      Validators.required
    ]),

  })

  generateJobs() {
    this.processQuantity = this.formGroup.getRawValue()["processQuantityFormControl"]
    if (this.processQuantity <= 0) {
      alert("Cantidad de trabajos invalida. Tiene que ser mayor a 0")
    } else {
      this.generateData.generateProcess(this.processQuantity)
    }
  }
}
