import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences = [
    {
      name: 'Blndspt Consulting',
      title: 'Full Stack Developer',
      img: 'assets/images/software.png',
      // tslint:disable-next-line: max-line-length
      description: 'While I was working for Audi, I had an idea for an app. I decided that instead of hiring someone to make it for me that I would learn how to do it myself. I made that app for my final project at Galvanize.',
      date: 'June 2018 - Present',
      selected: false,
      hide: false
    },
    {
      name: 'Audi on Demand',
      title: 'Brand Specialist',
      img: 'assets/images/audi_sketch.png',
      // tslint:disable-next-line: max-line-length
      description: 'I started working for Audi on Demand as a Brand Specialist to make better use of my college degree and explore new opportunities in a city that I always wanted to spend more time in.',
      date: 'April 2017 - October 2017',
      selected: false,
      hide: false
    },
    {
      name: 'VJB Cellars',
      title: 'Wine Specialist',
      img: 'assets/images/wine1.png',
      // tslint:disable-next-line: max-line-length
      description: 'Before my first job out of college as a Wine Specialist, I spent my free time preparing for the interview by putting cheap wines under rigirous tasting procedures.',
      date: 'September 2016 - March 2017',
      selected: false,
      hide: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  selectExperience(experience, experiences) {
    if (experience.selected) {
      this.resetExperiences(experiences);
    } else {
      this.resetExperiences(experiences);
      this.hideExperiences(experience, experiences);
    }
  }

  resetExperiences(experiences) {
    for (let i = 0; i < experiences.length; i++) {
      experiences[i].selected = false;
      experiences[i].hide = false;
    }
  }

  hideExperiences(experience, experiences) {
    experience.selected = true;
    for (let i = 0; i < experiences.length; i++) {
      if (experiences[i].name === experience.name) {
        continue;
      } else {
        experiences[i].hide = true;
      }
    }
  }

  expandDetails(experience) {
    experience.selected = true;
  }
  collapseDetails(experience) {
    experience.selected = false;
  }

}
