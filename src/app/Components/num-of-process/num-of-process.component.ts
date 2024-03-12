import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {GenerateDataService} from "../../Services/Data/generate-data.service";

@Component({
  selector: 'app-num-of-process',
  templateUrl: './num-of-process.component.html',
  styleUrl: './num-of-process.component.css'
})
export class NumOfProcessComponent {
  constructor(private generateData: GenerateDataService) {
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
