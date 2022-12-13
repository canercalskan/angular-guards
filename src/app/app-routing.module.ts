import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound } from './components/pages/404/404.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RouteGuard } from './guards/route.guard';
import { LoginPageGuard } from './guards/login.guard';
const routes: Routes = [
  //as default, our application opens login page.
  {path : '' , component : LoginComponent},
  {path : 'Home' , component : HomeComponent , canActivate : [RouteGuard]},
  {path : 'Login' , component : LoginComponent},
  // ** stans for a route that not defined by our routes array. If user navigates to an non-existing route, we are redirecting him/her to the 404 page via NotFound component
  {path : '**' , component : NotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
