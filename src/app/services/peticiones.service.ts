import { Injectable } from '@angular/core';
import { Http, Response, Headers }  from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';

@Injectable()
export class PeticionesService {

  public url: string;

  constructor(private _http: Http) { 
    this.url = "https://jsonplaceholder.typicode.com/posts";
  }

  getPrueba(): string{
    return 'Hola mundo desde el servicio';
  }

  getArticulos(){
    return this._http.get(this.url).map(res => res.json());

  }

}
