import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SetupComponent } from './components/setup/setup.component';

import { DetailService } from './services/detail.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SetupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
