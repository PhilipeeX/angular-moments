import { Injectable } from '@angular/core';
import { Animal } from '../animal.interface'

@Injectable({
  providedIn: 'root'
})
export class AnimalRemotionService {

  constructor() { }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => a.name !== animal.name);
  }
}
