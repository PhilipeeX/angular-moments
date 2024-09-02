import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/animal.interface';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {name: 'Sansão', type: 'Cachorro', age: 6},
    {name: 'Mid', type: 'Gato', age: 2},
    {name: 'Nineco', type: 'Calopsita', age: 1},
    {name: 'Monê', type: 'Peixe', age: 2}
  ];
  animalInfo = ''

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    this.animalInfo = `${ animal.name } tem ${animal.age} ${animal.age > 1 ? 'anos' : 'ano'}`;
  }
}
