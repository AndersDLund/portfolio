import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  @Input() isWeb: boolean;
  count = 0;
  certificates = [
    { name: 'Certified Scrum Master', date: 'November 2018', organization: 'Scrum Alliance', img: './assets/images/csm.png',
     selected: false },
    { name: 'Web Development Immersive', date: 'March 2018', organization: 'Galvanize', img: './assets/images/galvanize.png',
     selected: false },
    { name: 'Level 1 Sommlier', date: 'March 2017', organization: 'Court of Master Sommeliers', img: './assets/images/somm1.png',
     selected: false }
  ];

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      for (let i = 0; i < this.certificates.length; i++) {
        this.certificates[i].selected = false;
      }
      if (this.count < 3) {
        this.certificates[this.count].selected = true;
        this.count++;
      } else {
        this.count = 0;
      }
    }, 5000);
  }
}
