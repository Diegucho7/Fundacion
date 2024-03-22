import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactosComponent } from './contactos/contactos.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { DonacionesComponent } from './donaciones/donaciones.component';

const routes: Routes = [
  {path: 'fundacion',
  component: PagesComponent,

  children:[
   {path: '', component: DashboardComponent, data: {titulo: 'fundacion'}},
   {path: 'nosotros', component: NosotrosComponent, data: {titulo: 'nosotros'}},
   {path: 'contactos', component: ContactosComponent, data: {titulo: 'contactos'}},
   {path: 'mision', component: MisionComponent, data: {titulo: 'mision'}},
   {path: 'vision', component: VisionComponent, data: {titulo: 'vision'}},
   {path: 'donaciones', component: DonacionesComponent, data: {titulo: 'donaciones'}}
  ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
