import { Component, OnInit } from "@angular/core";
import { PokemonModel } from "src/app/models/pokemon.model";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
@Component({
    selector : 'popular-products',
    templateUrl : './popular-products.component.html',
    styleUrls : ['./popular-products.component.css']
})

export class PopularProducts implements OnInit{
    constructor(private UserService : UserService , private router : Router) {}
    popularProductsList! : PokemonModel[];
    visitedProducts : PokemonModel [] = [] 
    ngOnInit() : void {
        this.UserService.getPokemons().then((pokemonList) => {
            this.popularProductsList = pokemonList
            
        }).then(() => {
            this.popularProductsList.forEach(result => {
                result.price = 10;
            })
        }).finally(() => {
            if(localStorage.getItem('visitedProducts')) {
                this.visitedProducts = JSON.parse(localStorage.getItem('visitedProducts')!) 
               }
        })
    }

    visitProduct(product : {name : string , url : string , price: number}) : void {
        this.visitedProducts.push(product)
        localStorage.setItem('visitedProducts' , JSON.stringify(this.visitedProducts));
        this.router.navigate(['Order'])
    }
}