import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private _palabra:Router) { }

  ngOnInit() {
  }
  buscarRopa(palabraBuscar){
    this._palabra.navigate(['/buscar',palabraBuscar])
  }

}
