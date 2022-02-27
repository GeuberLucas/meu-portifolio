import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculateComponent } from './calculate/calculate.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'calculate' , component:CalculateComponent},
  {path: 'projects' , component:ProjectsComponent},
  {path: 'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
