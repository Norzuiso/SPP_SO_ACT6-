import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

import {MatSliderModule} from "@angular/material/slider";
import {GenerateDataService} from "../../Services/Data/generate-data.service";
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-num-of-process',
  standalone: true,
  imports: [
    MatButtonModule,
    NgbModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSliderModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './num-of-process.component.html',
  styleUrl: './num-of-process.component.css'
})
export class NumOfProcessComponent {
  constructor(private generateData: GenerateDataService) {
  }

  private processQuantity: number = 1;

  formGroup: FormGroup = new FormGroup({
    jobsQuantityFormControl: new FormControl(this.processQuantity, [
      Validators.required
    ]),

  })

  generateJobs() {
    this.generateData.generateProcess(this.processQuantity)
  }
}
