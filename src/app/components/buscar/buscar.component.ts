import { Component, OnInit } from '@angular/core';
//servicio
import { RopasService } from "../../service/ropas.service";
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  buscando: any = [];
  constructor(private _servicios: RopasService, private _activated:ActivatedRoute ) {
    


  this._activated.params.subscribe( parametro => {

  
   this.buscando = this._servicios.buscarItem(parametro.palabraBuscar);

  });




    
  }

  ngOnInit() {
  }


}
