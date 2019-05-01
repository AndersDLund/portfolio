import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  socialMedias = [
    { name: 'Linkedin', img: './assets/images/linkedin.png', link: 'http://www.linkedin.com/in/andersdlund/'},
    { name: 'Github', img: './assets/images/tech/github.png', link: 'http://github.com/AndersDLund'},
    { name: 'Facebook', img: './assets/images/fb.png', link: 'http://www.facebook.com/anders.lund.779'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToSocial(socialMedia) {
    window.open(socialMedia.link, '_blank');
  }

}
