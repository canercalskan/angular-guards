import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom, Observable } from "rxjs";
import { PokemonModel } from "src/app/models.ts/pokemon.model";
@Component({
    selector : 'home',
    styleUrls : ['./home.component.css'],
    templateUrl : './home.component.html'
})

export class HomeComponent implements OnInit {
    pokemons! : PokemonModel
    constructor(private http : HttpClient) {}
    ngOnInit(): void {
        this.getPokemons().then((t) => {
            console.log(t.results)
        })
    }
    async getPokemons(){
        const pokemons$ = this.http.get<PokemonModel>('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
        this.pokemons = await lastValueFrom(pokemons$)
        return this.pokemons;
    }
}