import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SetupComponent } from './components/setup/setup.component';

const routes: Routes = [
	
	{path:'', component:HomeComponent},
	{path:'setup', component:SetupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
