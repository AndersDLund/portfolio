import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  @Input() isWeb: boolean;
  certificates = [
    { name: 'Certified Scrum Master', date: 'November 2018', organization: 'Scrum Alliance', img: './assets/images/csm.png' },
    { name: 'Web Development Immersive', date: 'March 2018', organization: 'Galvanize', img: './assets/images/galvanize.png' },
    { name: 'Level 1 Sommlier', date: 'March 2017', organization: 'Court of Master Sommeliers', img: './assets/images/somm1.png' }
  ];

  constructor() { }

  ngOnInit() {}
}
