import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  events = [
      {
        name : 'Group Meeting',
        time : 'In 32 Minutes Room 1B',
      },
      {
       name : 'Public Beta Release',
       time : '11:00 PM',
      },
      {
       name : 'Dinner with David',
       time : '17:30 PM',
      },
      {
       name : 'Q&A Session',
       time : '11:00 PM',
      }
  ];

  notes = [
     {
      name      : 'Best songs to listen while working',
      lastedit: new Date('1/17/17'),
     },
     {
      name      : 'Useful subreddits',
      lastedit : new Date('1/17/17'),
     },
  ];

  constructor() { }

  ngOnInit() {
  }

  isMobile() {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }
 }
