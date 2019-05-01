import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

  hobbies = [
    {
      name: 'Soccer',
      img: './assets/images/chelsea.png',
      description: 'My favorite sport to play and watch is soccer. Go Blues!'
    },
    {
      name: 'Music',
      img: './assets/images/music.png',
      description: 'If you watched my video above and had your volume up, then you also heard an original song that I made!'
    },
    {
      name: 'Hiking',
      img: './assets/images/mountain.png',
      description: 'Since living in Colorado for the last year, exploring the mountains has become one of my favorite leisure activities.'
    },
    {
      name: 'Beer',
      img: './assets/images/beer.png',
      description: "Even though I studied wine, I'm much more inclined to grab a good beer with my friends."
    },
    {
      name: 'Learning',
      img: './assets/images/learn.png',
      description: "There's nothing more satisfying than learning a new skill and being able to implement it in a real world scenario."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
