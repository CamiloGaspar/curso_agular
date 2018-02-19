import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  public coche: Coche;
  public coches: Array<Coche>;

  constructor() {

    this.coche = new Coche("","","");
    this.coches = [
      new Coche("Kia Picanto","456","Blanco"),
      new Coche("Chevrolet Spark","200","Azul")
    ]

   }

  ngOnInit() {
  }

  onSubmit(){
    this.coches.push(this.coche);
    this.coche = new Coche("","","");
  }

}
