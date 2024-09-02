import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  birthDate: Date = new Date(1963, 8, 27);
  name: string = 'philipe';
  balance: number = 783.94;
  job: string = 'developer';


  constructor() { }

  ngOnInit(): void {
  }

}
