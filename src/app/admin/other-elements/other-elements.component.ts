import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-elements',
  templateUrl: './other-elements.component.html',
  styleUrls: ['./other-elements.component.scss']
})
export class OtherElementsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  typesOfColors = ['Primary', 'Accent', 'Warn', 'Grey', 'Black'];
}
