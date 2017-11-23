import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA : Element[] = [
  {position: 1, name: 'Jack', weight: 50, symbol: 'J'},
  {position: 2, name: 'Zill', weight: 40, symbol: 'Z'},
  {position: 3, name: 'Crstyl', weight: 55, symbol: 'C'},
  {position: 4, name: 'Peter', weight: 39, symbol: 'P'},
  {position: 5, name: 'Herry', weight: 45, symbol: 'H'},
];
