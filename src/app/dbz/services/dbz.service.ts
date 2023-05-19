

import { Injectable } from '@angular/core';
import{ v4 as uuid}from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7900
  }];


  addCharacter( character : Character): void{
    // console.log(character);

   /* const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }*/

    const newCharacter: Character = {id: uuid(), ...character};
    this.characters.push(newCharacter);
  }


 /* onDeletCharacter( index : number){

    this.characters.splice(index,1);
  }*/

  deletCharacterById( id: String ){
    this.characters = this.characters.filter( Character => Character.id !== id);
  }


}
