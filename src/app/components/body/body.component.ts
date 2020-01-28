import { Component, OnInit } from '@angular/core';
//servicios
import { RopasService } from '../../service/ropas.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  productos:any[]=[]
  constructor(private _servicios:RopasService) {
    this.productos = _servicios.getProductos();
   }

  ngOnInit() {
  }

}
