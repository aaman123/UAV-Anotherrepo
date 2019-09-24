import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularCesiumModule } from 'angular-cesium';
import { PlaneComponentComponent } from './plane-component/plane-component.component';
import { LivewindowsComponent } from './livewindows/livewindows.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { HeaderComponent } from './main-window/header/header.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlaneComponentComponent,
    LivewindowsComponent,
    MainWindowComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularCesiumModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
