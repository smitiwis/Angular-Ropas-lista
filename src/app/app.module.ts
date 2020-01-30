import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//RUTAS
import { app_routing } from './app.routes';
//COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RopasComponent } from './components/ropas/ropas.component';
import { AbautComponent } from './components/abaut/abaut.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
//servicios
import{ RopasService } from './service/ropas.service';
import { RopainfoComponent } from './components/ropainfo/ropainfo.component';
import { BuscarComponent } from './components/buscar/buscar.component' ;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RopasComponent,
    AbautComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    PageErrorComponent,
    RopainfoComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [
    RopasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
