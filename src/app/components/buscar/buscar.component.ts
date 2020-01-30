import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//servicio
import { RopasService } from "../../service/ropas.service";
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  buscando: any[] = [];
  constructor(private _servicios: RopasService, private _buscarRuta: Router) {
  
  }

  ngOnInit() {
  }

}
