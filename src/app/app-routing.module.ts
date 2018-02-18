import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
  {path: '',  redirectTo: '/home',  pathMatch: 'full'},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'fruta', component: FrutaComponent },
  {path: 'home', component: HomeComponent },
  {path: 'contacto', component: ContactoComponent },
  {path: 'contacto/:page', component: ContactoComponent },
  {path: '**', component: HomeComponent}

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

