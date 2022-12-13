import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector : 'home',
    styleUrls : ['./home.component.css'],
    templateUrl : './home.component.html'
})

export class HomeComponent implements OnInit {
    constructor(private http : HttpClient) {}
    ngOnInit(): void {}
}