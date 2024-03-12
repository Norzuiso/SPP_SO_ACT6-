import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NumOfProcessComponent} from "./Components/num-of-process/num-of-process.component";
import {StatesManagerComponent} from "./Components/Estados/states-manager/states-manager.component";
import {GeneralComponent} from "./Components/general/general.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NumOfProcessComponent, StatesManagerComponent, GeneralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Act6';
}
