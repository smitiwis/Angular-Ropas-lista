import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RopasService } from "../../service/ropas.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-ropainfo",
  templateUrl: "./ropainfo.component.html",
  styleUrls: ["./ropainfo.component.css"]
})
export class RopainfoComponent implements OnInit {
  detalles: any = {};
  constructor(private _activeRou: ActivatedRoute, private _servicio: RopasService, private _info:Router) {
      this._activeRou.params.subscribe(params => {
     this.detalles = this._servicio.informacion(params.id);
    });
  }
  
 
  ngOnInit() {}
}
