import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {

  public listadoRopa: Array<string>;
  public prenda_a_guardar: string;
  public fecha: Date;


  constructor(
    private _ropaService: RopaService
  ) {

    this.listadoRopa = this._ropaService.getRopa();
    this.fecha = new Date();

  }

  ngOnInit() {
    console.log(this.listadoRopa);
  }

  addPrenda(prenda: string) {
    if (prenda == null) {
      alert("No se ha agregado ninguna prenda");
    } else {
      this._ropaService.addPrenda(prenda);
      this.prenda_a_guardar = null;
    }
  }


  eliminarPrenda(index: number) {
    this._ropaService.eliminarPrenda(index);
  }

}
