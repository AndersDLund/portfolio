import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {
  tech = [
    { name: 'TYPESCRIPT', img: './assets/images/tech/ts.png' },
    { name: 'ANGULAR', img: './assets/images/tech/angular.png' },
    { name: 'HTML5', img: './assets/images/tech/html.png' },
    { name: 'SCSS', img: './assets/images/tech/scss.png' }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleExpand(stack) {
    stack.expanded = !stack.expanded;
  }

}
