import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  @Input() isWeb: boolean;

  accidentalDescription = {

    paragraphs: [

      `While I was working for Audi, we used an app called Record 360 to track vehicle damage.
      The app served its purpose but it was essentially just a medium to email pictures and videos.`,

      `I had an idea to improve the app by making it a little more smart using deep
      learning to reduce the amount of user interaction. I started researching ways to
      bring the app into fruition and found that there were only really two options:
      make the app myself or hire someone to do it for me.`,

      `I found that I could attend a 6 month coding bootcamp
      for less money than it would take to pay someone else to make the app, which is right around when I discovered Galvanize.`,

      `accidental.io (my idea) was my final project at galvanize. I built it in about 2 weeks using a language I didn’t know prior.
      Although, my skills as a developer have improved dramatically since I developed this app and what you see in the video does
      not reflect my current level, it's the project that I'm most proud of. It was the project that made me realize that
      if you can think it, you can build it.`

    ],
    selected: false,
    defaultText: 'For a long description'
  };
  constructor() { }

  ngOnInit() {
  }

  expandDetails() {
    this.accidentalDescription.selected = !this.accidentalDescription.selected;
  }

  goToYoutube() {
    window.open('https://www.youtube.com/embed/HtEq5L5xBDU?start=59', '_blank');
  }
}
