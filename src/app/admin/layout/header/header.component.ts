import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @Input('sidenav') sidenav:any;
  @Input('sidebar') sidebar:any;

  displaySearch : Boolean = false;
  constructor() { }



  ngOnInit() {
  }

}
