import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class ThemeService {

  themes = [{
     name: 'default-theme',
     baseColor: '#7e57c2',
     isActive: false
  },
  {
     name: 'black-theme',
     baseColor: '#212121',
     isActive: false
  },
  {
     name: 'light-theme',
     baseColor: '#eeeeee',
     isActive: false
  }];

  activatedThemeName: String;

  constructor() {
    this.changeTheme({name: 'default-theme'});
  }

  changeTheme(theme) {
    this.themes.forEach((t) => {
      t.isActive = false;

      $(document.body).removeClass(t.name);
      if(t.name === theme.name) {
        $(document.body).addClass(t.name);

        t.isActive = true;

        this.activatedThemeName = theme.name;
      }
    });
  }
}
