import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/animal.interface';

import { AnimalRemotionService } from 'src/app/services/animal-remotion.service'

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];
  animalInfo = ''

  constructor(private animalRemotionService: AnimalRemotionService) {
    this.getAnimals();
  }

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    this.animalInfo = `${ animal.name } tem ${animal.age} ${animal.age > 1 ? 'anos' : 'ano'}`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animalRemotionService.remove(this.animals, animal)
  }

  getAnimals(): void {
    this.animalRemotionService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
