import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SetupComponent } from './components/setup/setup.component';
import { SortComponent } from './components/sort/sort.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
	
	{path:'', component:HomeComponent},
	{path:'setup', component:SetupComponent},
	{path:'sort', component:SortComponent},
	{path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
