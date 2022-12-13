import { NgModule } from "@angular/core";
import { PokemonModel } from "../models.ts/pokemon.model";
import { UserModel } from "../models.ts/user.model";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@NgModule()
export class UserService {
    constructor( private http : HttpClient ){}
    authenticateUser(userFormInput : UserModel) : boolean {
        let registeredUser : UserModel = JSON.parse(localStorage.getItem('user')!)
        if(!registeredUser) {
            return false
        }
        else {
            if(userFormInput.email === registeredUser.email && userFormInput.password === registeredUser.password) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    async getPokemons(){
        let pokemons : PokemonModel;
        const pokemons$ = this.http.get<PokemonModel>('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
        pokemons = await lastValueFrom(pokemons$)
        return pokemons;
    }
}