import { NgModule } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserModel } from "../models.ts/user.model";


@NgModule()
export class RouteGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        //Since our application doesn't have any backend service or database connection, i am using localstorage to authenticate the user.
        let user = JSON.parse(localStorage.getItem('user')!)
        if(user) {
            return true;
        }
        else {
            return false;
        }
    }
}

//User must be blocked from login/register page if he/she is already logged in.
@NgModule()
export class LoginGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return true;
    }
}