import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'company-repo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  title: string;
  imageSrc: string;

  constructor() { }

  ngOnInit(): void {
  }

}
