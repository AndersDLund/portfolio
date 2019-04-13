import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    if (document.documentElement.scrollTop > 600) {
      document.getElementById('navbar').setAttribute('class', 'down');
      // .style.top = '0';
    } else {
      document.getElementById('navbar').setAttribute('class', 'up');
      // .style.top = '-50px';
    }
  }
}
