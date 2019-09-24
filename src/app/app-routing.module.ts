import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivewindowsComponent } from './livewindows/livewindows.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'main' , component: MainWindowComponent},
  {path: 'live' , component: LivewindowsComponent},
  {path: '' , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
