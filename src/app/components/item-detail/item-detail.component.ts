import { Component, OnInit } from '@angular/core';
import {Animal} from "../../animal.interface";
import {ActivatedRoute } from "@angular/router";
import { AnimalRemotionService } from "../../services/animal-remotion.service";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  animal?: Animal;

  constructor(private animalService: AnimalRemotionService, private route: ActivatedRoute) {
    this.getAnimal()
  }

  ngOnInit(): void {
  }

  getAnimal(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.animalService.getItem(id).subscribe((animal) => (this.animal = animal));
  }

}
