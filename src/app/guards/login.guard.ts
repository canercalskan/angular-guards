import { NgModule } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

//User must be blocked from login/register page if he/she is already logged in.
@NgModule()
export class LogGuard implements CanActivate {
constructor(private AuthService : AuthService , private router : Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let returnVal : boolean = true;
        if(this.AuthService.isLoggedIn()) {
            this.router.navigate(['Home']);
        }
        return returnVal
    }
}