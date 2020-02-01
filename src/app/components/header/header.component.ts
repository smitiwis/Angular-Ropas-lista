import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RopasService } from '../../service/ropas.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private _ruta:Router, private _servicio:RopasService) { }

  ngOnInit() {
  }
  buscarRopa(palabraBuscar){
    this._ruta.navigate(['buscar/', palabraBuscar]);
    
  }

}
