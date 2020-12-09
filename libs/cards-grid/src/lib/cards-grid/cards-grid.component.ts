import { Component, Input, OnInit } from '@angular/core';

export interface Card {
  title?: string;
  imageSrc?: string;
  description?: string;
}

@Component({
  selector: 'unicorn-cards-grid',
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.scss']
})
export class CardsGridComponent implements OnInit {
  @Input()
  cards: Card[];
  constructor() { }

  ngOnInit(): void {
  }

}

function notCovered() {
  console.log('Not covered');
}
