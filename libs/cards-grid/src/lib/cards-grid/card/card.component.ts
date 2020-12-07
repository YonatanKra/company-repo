import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'unicorn-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  imageSrc: string;
  @Input()
  description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
