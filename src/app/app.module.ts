import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SetupComponent } from './components/setup/setup.component';

import { DetailService } from './services/detail.service';
import { SortComponent } from './components/sort/sort.component';
import { StewardComponent } from './components/steward/steward.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SetupComponent,
    SortComponent,
    StewardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
