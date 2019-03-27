import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences = [
    {
      name: 'VJB Cellars',
      img: 'assets/images/wine_glass.svg',
      description: '',
      selected: false,
      hide: false
    },
    {
      name: 'Audi on Demand',
      img: 'assets/images/audi2.png',
      description: '',
      selected: false,
      hide: false
    },
    {
      name: 'Galvanize',
      img: 'assets/images/galvanize.png',
      description: '',
      selected: false,
      hide: false
    },
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

}
