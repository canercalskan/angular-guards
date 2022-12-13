import { Injectable, NgModule } from "@angular/core";

Injectable({providedIn : "root"})
@NgModule()

export class AuthService {
    constructor(){}
//Since our application doesn't have any backend service or database connection, i am using localstorage to authenticate the user.
    isLoggedIn() : boolean {
        if(!JSON.parse(localStorage.getItem('user')!)) {
            return false;
        }
        else {
            return true;
        }
    }

}