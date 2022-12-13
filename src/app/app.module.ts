import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFound } from './components/pages/404/404.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RouteGuard } from './guards/route.guard';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { RecentlyVisitedProducts } from './components/layouts/recently-visited/recently-visited.component';
import { PopularProducts } from './components/layouts/popular-products/popular-products.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFound , 
    LoginComponent,
    RecentlyVisitedProducts,
    PopularProducts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouteGuard , AuthService , UserService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
