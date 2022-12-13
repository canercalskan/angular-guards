import { NgModule } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";


@NgModule()
export class RouteGuard implements CanActivate {
    constructor(private AuthService : AuthService , private router : Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const returnVal : boolean = this.AuthService.isLoggedIn();
        if(!returnVal) {
            this.router.navigate(['Login']);
        }
        return returnVal;
    }
}
