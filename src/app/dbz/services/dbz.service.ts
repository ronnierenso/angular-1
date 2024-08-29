import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Goku', power: 9000 },
    { id: uuid(), name: 'Vegeta', power: 8000 },
    { id: uuid(), name: 'Piccolo', power: 7000 },
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    }
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((character) => character.id !== id);
  }


}
