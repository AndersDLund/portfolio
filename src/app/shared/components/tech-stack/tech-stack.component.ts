import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {
  tech = [
    { name: 'Typescript', img: 'assets/images/tech/ts.png' },
    { name: 'Angular', img: 'assets/images/tech/angular.png' },
    { name: 'HTML5', img: 'assets/images/tech/html.png' },
    { name: 'SCSS', img: 'assets/images/tech/scss.png' }
    // { name: 'Github', img: 'assets/images/tech/github.png'},
    // { name: 'Bootstrap', img: 'assets/images/tech/bootstrap.png'},
    // { name: 'Postman', img: 'assets/images/tech/postman.png' }
    // {
    //   name: 'What I know', expanded: false, stack: [
    //     { name: 'Javascript', img: 'assets/images/tech/js.png'},
    //     { name: 'CSS', img: 'assets/images/tech/css.png'},
    //     { name: 'Node.js', img: 'assets/images/tech/node.png'},
    //     { name: 'Express', img: 'assets/images/tech/express.png'},
    //     { name: 'PostgreSQL', img: 'assets/images/tech/postgresql.png'},
    //     { name: 'Swift', img: 'assets/images/tech/swift.png'},
    //     { name: 'Knex', img: 'assets/images/tech/knex.png'},
    //   ]
    // },
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleExpand(stack) {
    stack.expanded = !stack.expanded;
  }

}
