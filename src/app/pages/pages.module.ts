import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { RouterOutlet } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { DonacionesComponent } from './donaciones/donaciones.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NosotrosComponent,
    MisionComponent,
    VisionComponent,
    ContactosComponent,
    PagesComponent,
    DonacionesComponent
    
  ],
  exports:[
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterOutlet,
    FormsModule,
    SharedModule,
  ]
})
export class PagesModule { }
