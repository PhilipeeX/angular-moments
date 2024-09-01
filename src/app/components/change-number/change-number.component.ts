import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.scss']
})
export class ChangeNumberComponent implements OnInit {
  @Output() public changeNumber = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    console.log('clicou para mudar o número');
    this.changeNumber.emit()
  }

}
