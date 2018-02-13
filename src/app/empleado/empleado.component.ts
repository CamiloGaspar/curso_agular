import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public empleado: Empleado;
  public trabajadores: Array<Empleado>;
  public trabajador_externo: boolean;
  public color: string;
  public color_seleccionado: string;

  constructor() {
    this.empleado = new Empleado("Juan", 22, "Desarrollador", true);
    this.trabajadores = [
      new Empleado("Juan", 22, "Desarrollador", true),
      new Empleado("Camilo", 42, "Arquitecto", true),
      new Empleado("Pedro", 20, "Cocinero", true),
      new Empleado("Alejandro", 30, "Diseñador", false)

    ];
    this.trabajador_externo = true;
    this.color = "";
    this.color_seleccionado = "#ccc";
  }

  ngOnInit() {

    console.log(this.trabajadores);
  }
  

  cambiarColor(color){
    this.color = color;
  }

  cambiarExterno(valor){
    this.trabajador_externo = valor;
  }

}
