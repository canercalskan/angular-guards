import { NgModule } from "@angular/core";
import { ExpectedReturnModel, PokemonModel } from "../models/pokemon.model";
import { UserModel } from "../models/user.model";
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
        let returnVal : ExpectedReturnModel;
        let pokemons : PokemonModel[];
        const returnVal$ = this.http.get<ExpectedReturnModel>('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
        returnVal = await lastValueFrom(returnVal$)
        pokemons = returnVal.results
        return pokemons;
    }
}