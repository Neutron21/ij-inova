import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemplosPageComponent } from './ejemplos-page/ejemplos-page.component';
import { MainComponent } from './main/main.component';
import { NosotrosPageComponent } from './nosotros-page/nosotros-page.component';
import { ServiciosPageComponent } from './servicios-page/servicios-page.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'Ejemplos', component: EjemplosPageComponent },
  { path: 'Examples', component: EjemplosPageComponent },
  { path: 'Servicios', component: ServiciosPageComponent },
  { path: 'Services', component: ServiciosPageComponent },
  { path: 'Nosotros', component: NosotrosPageComponent },
  { path: 'AboutUs', component: NosotrosPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
