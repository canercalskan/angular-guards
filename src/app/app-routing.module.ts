import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound } from './components/pages/404/404.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RouteGuard } from './guards/route.guard';

const routes: Routes = [
  {path : '' , component : HomeComponent , canActivate : [RouteGuard]},
  {path : 'Login' , component : LoginComponent},
  {path : 'Home' , component : HomeComponent , canActivate : [RouteGuard]},
  {path : '**' , component : NotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
