import { Component, OnInit } from "@angular/core";
import { PokemonModel } from "src/app/models.ts/pokemon.model";
import { UserService } from "src/app/services/user.service";
@Component({
    selector : 'popular-products',
    templateUrl : './popular-products.component.html',
    styleUrls : ['./popular-products.component.css']
})

export class PopularProducts implements OnInit{
    constructor(private UserService : UserService) {}
    popularProductsList! : PokemonModel;
    ngOnInit() : void {
        this.UserService.getPokemons().then((pokemonList) => {
            this.popularProductsList = pokemonList
            console.log(pokemonList)
        })
    }
}