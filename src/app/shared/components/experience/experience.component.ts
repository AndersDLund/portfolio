import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() isWeb: boolean;

  experiences = [
    {
      name: 'Blndspt Consulting',
      title: 'Full Stack Developer',
      img: './assets/images/software.png',
      // tslint:disable-next-line: max-line-length
      description: 'After I graduated from Galvanize, I packed my bags and moved to Colorado, a state that I’d never been to before, to work for Blndspt Consulting as a full stack web developer. Here, I continue to refine my skills and learn something new everyday.',
      date: 'June 2018 - Present',
      selected: false,
      hide: false
    },
    {
      name: 'Audi on Demand',
      title: 'Brand Specialist',
      img: './assets/images/audi_sketch.png',
      // tslint:disable-next-line: max-line-length
      description: 'I started working for Audi on Demand as a Brand Specialist to make better use of my degree while exploring a city that I always wanted to spend more time in. During my time here, I developed a deep interest in mobility and the modern commuter.',
      date: 'April 2017 - October 2017',
      selected: false,
      hide: false
    },
    {
      name: 'VJB Cellars',
      title: 'Wine Specialist',
      img: './assets/images/wine1.png',
      // tslint:disable-next-line: max-line-length
      description: 'My first job out of college was as a Wine Specialist. To prepare for the interview, I put cheap wines under rigorous examinations. Near the end of my time working here, I passed the first Sommelier exam and was accepted into the Culinary Institute of America but I decided to switch things up instead.',
      date: 'September 2016 - March 2017',
      selected: false,
      hide: false
    }
  ];

  constructor() { }

  ngOnInit() {

  }

  expandDetails(experience) {
    experience.selected = true;
  }
  collapseDetails(experience) {
    experience.selected = false;
  }

}
