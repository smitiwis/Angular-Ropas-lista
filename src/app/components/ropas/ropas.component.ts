import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
//servicios
import { RopasService } from "../../service/ropas.service";
@Component({
  selector: "app-ropas",
  templateUrl: "./ropas.component.html",
  styleUrls: ["./ropas.component.css"]
})
export class RopasComponent implements OnInit {
  productos: any[] = [];
  constructor(private _servicios: RopasService, private _info: Router) {
    this.productos = _servicios.getProductos();
  }

  informacion(indice: number) {
    this._info.navigate(["ropainfo", indice]);
  }
  ngOnInit() {}
}
