import { NgModule } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

//User must be blocked from login/register page if he/she is already logged in.
@NgModule()
export class LoginPageGuard implements CanActivate {
constructor(private AuthService : AuthService , private router : Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let returnVal : boolean = true
        if(returnVal) {
            this.router.navigate(['Home']);
        }
        return returnVal;
    }
}