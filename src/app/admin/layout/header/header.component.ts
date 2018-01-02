import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ThemeService } from '../../../shared/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @Input('sidenav') sidenav:any;
  @Input('sidebar') sidebar:any;

  removeMessage: Boolean = false;
  themes;
  displaySearch : Boolean = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themes = this.themeService.themes;
  }

  changeTheme(theme) {
    this.themeService.changeTheme(theme);
  }

}
