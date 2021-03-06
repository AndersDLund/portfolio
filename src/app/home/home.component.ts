import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  isWeb: boolean;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 600 || document.scrollingElement.scrollTop > 600) {
        document.getElementById('navbar').setAttribute('class', 'down');
      } else {
        document.getElementById('navbar').setAttribute('class', 'up');
      }
    }

    this.breakpointObserver
      .observe(['(min-width: 800px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isWeb = true;
        } else {
          this.isWeb = false;
        }
      });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    if (document.documentElement.scrollTop > 600) {
      document.getElementById('navbar').setAttribute('class', 'down');
    } else {
      document.getElementById('navbar').setAttribute('class', 'up');
    }
  }
}
