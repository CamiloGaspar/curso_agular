import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {

  public nombre_prenda: string;
  public coleccion_ropa: Array<string>;

  constructor() {

    this.nombre_prenda = 'Pantalones azules';
    this.coleccion_ropa = ['Pantalones Blancos', 'Camiseta Roja'];

   }


   prueba(): string{
     return this.nombre_prenda;
   }


   addPrenda(prenda: string): Array<string>{
     this.coleccion_ropa.push(prenda);
     return this.getRopa();
   }

   getRopa(): Array<string>{
     return this.coleccion_ropa;
   }

   eliminarPrenda(index: number){
     this.coleccion_ropa.splice(index, 1);
   }

}
