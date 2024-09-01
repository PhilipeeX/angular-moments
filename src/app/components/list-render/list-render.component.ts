import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals = [
    {name: 'Sansão', type: 'Cachorro'},
    {name: 'Mid', type: 'Gato'},
    {name: 'Nineco', type: 'Calopsita'},
    {name: 'Monê', type: 'Peixe'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
