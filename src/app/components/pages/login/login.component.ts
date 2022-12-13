import { Component } from "@angular/core";
import { UserModel } from "src/app/models.ts/user.model";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
@Component({
    selector : 'login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css'],
})

export class LoginComponent {
    showRegisterForm : boolean = true;
    authenticated!: boolean
    constructor(private router : Router , private Userservice : UserService){}
    activateLoginForm() : void {
        this.showRegisterForm = false;
    }

    activateRegisterForm() : void {
        this.showRegisterForm = true;
    }

    handleRegisterFormSubmission(data : UserModel) : void {
        localStorage.setItem('user' , JSON.stringify(data));
        this.router.navigate(['Home'])
    }

    handleLoginFormSubmission(data : UserModel) : void {
        this.authenticated = this.Userservice.authenticateUser(data);
        if(this.authenticated) {
            this.router.navigate(['Home']);
        } 
    }

}