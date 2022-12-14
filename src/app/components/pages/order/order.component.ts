import { Component, OnInit } from "@angular/core";
import { PokemonModel } from "src/app/models/pokemon.model";

const months = ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'];

@Component({
    selector: 'order',
    templateUrl: './order.component.html',
    styleUrls:['./order.component.css'],
})

export class OrderComponent implements OnInit {
    orders! : PokemonModel[]
    fullDate : string = '';
    lastOrder! : PokemonModel
    constructor() {}
    ngOnInit() {
        if(localStorage.getItem('visitedProducts')) {
            this.orders = JSON.parse(localStorage.getItem('visitedProducts')!)
            this.lastOrder = this.orders.at(-1)!
        }
        let date = new Date();
       this.fullDate = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
    }
}