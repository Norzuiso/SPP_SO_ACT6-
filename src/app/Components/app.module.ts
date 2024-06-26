import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NuevoComponent} from "./Estados/nuevo/nuevo.component";
import {StatesManagerComponent} from "./Estados/states-manager/states-manager.component";
import {GeneralComponent} from "./general/general.component";
import {NumOfProcessComponent} from "./num-of-process/num-of-process.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";
import {TerminadoComponent} from "./Estados/terminado/terminado.component";
import {ListosService} from "../Services/Estados/Listos/listos.service";
import {ListosComponent} from "./Estados/listos/listos.component";
import {EjecucionComponent} from "./Estados/ejecucion/ejecucion.component";
import {BloqueadoComponent} from "./Estados/bloqueado/bloqueado.component";
import {InstruccionesComponent} from "./Instrucctions/instrucciones/instrucciones.component";
import {TimerComponent} from "./Estados/timer/timer.component";
import {HttpClientModule} from "@angular/common/http";
import {GeneralService} from "../Services/peticiones/general.service";
import {TerminadoNoDetailsComponent} from "./Estados/terminado-no-details/terminado-no-details.component";


@NgModule({
  declarations: [
    NuevoComponent,
    TerminadoComponent,
    ListosComponent,
    InstruccionesComponent,
    EjecucionComponent,
    BloqueadoComponent,
    StatesManagerComponent,
    GeneralComponent,
    NumOfProcessComponent,
    TimerComponent,
    TerminadoNoDetailsComponent
  ],
  exports: [
    StatesManagerComponent,
    NuevoComponent,
    GeneralComponent,
    TerminadoComponent,
    ListosComponent,
    EjecucionComponent,
    BloqueadoComponent,
    InstruccionesComponent,
    NumOfProcessComponent,
    TimerComponent,
    TerminadoNoDetailsComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    NgbModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSliderModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [GeneralService]

})
export class AppModule {
}
