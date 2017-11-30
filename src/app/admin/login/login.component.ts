import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
  }

}
