import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/animations';


@Component({
  selector: 'app-most-recent-position',
  templateUrl: './most-recent-position.component.html',
  styleUrls: ['./most-recent-position.component.scss'],
  animations: [fadeIn]
})
export class MostRecentPositionComponent implements OnInit {
  expand: boolean = false;
  hide: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  expandAside() {
    this.expand = !this.expand;
    this.hide = !this.hide;
  }

}
