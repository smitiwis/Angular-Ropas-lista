//IMPORTACIONES DE LAS RUTAS
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AbautComponent } from './components/abaut/abaut.component';
import { RopasComponent } from './components/ropas/ropas.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { RopainfoComponent } from './components/ropainfo/ropainfo.component'
//RUTAS

const APP_ROUTE: Routes = [
    {path:'home', component:HomeComponent},
    {path:'', component:HomeComponent},
    {path:'abaut', component:AbautComponent},
    {path:'ropas', component:RopasComponent},


    {path: 'ropainfo/:id', component:RopainfoComponent},
    {path:'**', component:PageErrorComponent},
  
    
]
export const app_routing = RouterModule.forRoot(APP_ROUTE);