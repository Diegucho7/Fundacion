import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/fundacion', pathMatch: 'full' },
  {path: '**', component:NopagefoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}),
  PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
