import { Component } from "@angular/core";
import { UserModel } from "src/app/models.ts/user.model";
import { Router } from "@angular/router";
@Component({
    selector : 'login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css'],
})

export class LoginComponent {
    showRegisterForm : boolean = true;
    constructor(private router : Router){}
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

    handleLoginFormSubmission(data : UserModel) : void {}

}