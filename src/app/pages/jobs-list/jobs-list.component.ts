import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {
  
  jobs = [
    {
      link: 'https://www.workable.com/j/4797D2A832',
      title: 'Front-end Developer (Remote & full time)',
      department: 'IT',
      location: 'Portugal, Lisbon, Lisbon',
    },
    {
      link: 'https://www.workable.com/j/4797D2A832',
      title: 'Front-end Developer (Remote & full time)',
      department: 'IT',
      location: 'Spain, Catalonia, Barcelona',
    },
    {
      link: 'https://www.workable.com/j/4797D2A832',
      title: 'Front-end Developer (Remote & full time)',
      department: 'IT',
      location: 'Romania, Sibiu, Sibiu',
    },
    {
      link: 'https://www.workable.com/j/4797D2A832',
      title: 'Front-end Developer (Remote & full time)',
      department: 'IT',
      location: 'Czech Republic, Prague, Prague',
    },
    {
      link: 'https://www.workable.com/j/4797D2A832',
      title: 'Front-end Developer (Remote & full time)',
      department: 'IT',
      location: 'Greece, Attica, Athens',
    },
    {
      link: 'https://www.workable.com/j/4797D2A832',
      title: 'Front-end Developer (Remote & full time)',
      department: 'IT',
      location: 'Hungary, Budapest, Budapest',
    },
    {
      link: 'https://www.workable.com/j/4797D2A832',
      title: 'Front-end Developer (Remote & full time)',
      department: 'IT',
      location: 'Spain, Community of Madrid, Madrid',
    },
    {
      link: 'https://www.workable.com/j/4797D2A832',
      title: 'Front-end Developer (Remote & full time)',
      department: 'IT',
      location: 'Poland, Masovian Voivodeship, Warsaw',
    },
    {
      link: 'https://www.workable.com/j/4797D2A832',
      title: 'Front-end Developer (Remote & full time)',
      department: 'IT',
      location: 'Romania, Timiș County, Timișoara',
    }

  ]
  constructor() {
  }

  ngOnInit() {
  }

}
