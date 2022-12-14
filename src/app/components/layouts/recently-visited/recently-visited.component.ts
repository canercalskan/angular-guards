import { Component, OnInit } from "@angular/core";
import { PokemonModel } from "src/app/models/pokemon.model";

@Component({
    selector : 'recently-visited',
    templateUrl : './recently-visited.component.html',
    styleUrls : ['./recently-visited.component.css']
})

export class RecentlyVisitedProducts implements OnInit{
    productList! : PokemonModel[]
    ngOnInit(): void {
        this.productList = JSON.parse(localStorage.getItem('visitedProducts')!)
        console.log(this.productList)
    }
}