import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { appRoutingProviders, routing } from './app-routing.module';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RopaService } from './services/ropa.service';
import { ConversorPipe } from './pipes/conversor.pipe';
import { CochesComponent } from './coches/coches.component';
import { PeticionesService } from './services/peticiones.service';
import { PlantillasComponent } from './plantillas/plantillas.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    FrutaComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders, RopaService, PeticionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
