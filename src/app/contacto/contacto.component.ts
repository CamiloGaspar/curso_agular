import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public parametro;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute

  ) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.parametro = params['page'];

    })
  }


  redirigir(){
    this._router.navigate(['/contacto','jc.gaspar10']);
  }

  redirigirDos(){
    this._router.navigate(['/home']);
  }

}
