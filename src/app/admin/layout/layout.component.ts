import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  //@HostBinding('class') componentCssClass = 'default-theme';

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

  constructor() { }

  ngOnInit() {
  }

  isMobile() {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }
 }
