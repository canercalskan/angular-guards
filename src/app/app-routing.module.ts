import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound } from './components/pages/404/404.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RouteGuard } from './guards/route.guard';
import { LogGuard } from './guards/login.guard';
import { OrderComponent } from './components/pages/order/order.component';
const routes: Routes = [
  //as default, our application opens login page.
  //If a user is already logged in then he/she must be navigated to the home page.
  {path : '' , component : LoginComponent , canActivate : [LogGuard]},
  //protecting the routes from Unauthenticated access, so , if a user hasn't logged in : he/she won't be able to reach that route.
  {path : 'Home' , component : HomeComponent , canActivate : [RouteGuard]},
  {path : 'Login' , component : LoginComponent ,canActivate : [LogGuard]},
  {path : 'Order' , component : OrderComponent , canActivate : [RouteGuard]},
  // ** stans for a route that not defined by our routes array. If user navigates to an non-existing route, we are redirecting him/her to the 404 page via NotFound component
  {path : '**' , component : NotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
