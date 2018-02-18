import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {

  transform(value: string, por: string, tres: string): string {
    
    let nro_uno: number = parseInt(value);
    let nro_dos: number = parseInt(por);
    let nro_tres: number = parseInt(tres);
    
    let result: string = "La multiplicación: "+nro_uno+" * "+nro_dos+" * "+nro_tres+" = "+(nro_uno*nro_dos*nro_tres);
    
    
    return result;
  }

}
