import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routes';
import { MeasureService } from './services/measure.service';
import { HttpClientModule } from '@angular/common/http';
import { NotyfModule } from 'ng-notyf';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    NotyfModule
  ],
  providers: [
    MeasureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
