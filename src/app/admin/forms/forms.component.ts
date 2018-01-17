import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  fileName2 : string;
  filteredOptions: Observable<string[]>;

  email = new FormControl('', [Validators.required, Validators.email]);
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  pokemonControl = new FormControl();
  myControl: FormControl = new FormControl();

  pokemonGroups = [
    {
      name: 'Grass',
      pokemon: [
        { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
        { value: 'oddish-1', viewValue: 'Oddish' },
        { value: 'bellsprout-2', viewValue: 'Bellsprout' }
      ]
    },
    {
      name: 'Water',
      pokemon: [
        { value: 'squirtle-3', viewValue: 'Squirtle' },
        { value: 'psyduck-4', viewValue: 'Psyduck' },
        { value: 'horsea-5', viewValue: 'Horsea' }
      ]
    },
    {
      name: 'Fire',
      disabled: true,
      pokemon: [
        { value: 'charmander-6', viewValue: 'Charmander' },
        { value: 'vulpix-7', viewValue: 'Vulpix' },
        { value: 'flareon-8', viewValue: 'Flareon' }
      ]
    },
    {
      name: 'Psychic',
      pokemon: [
        { value: 'mew-9', viewValue: 'Mew' },
        { value: 'mewtwo-10', viewValue: 'Mewtwo' },
      ]
    }
  ];

  options = [
   'One',
   'Two',
   'Three'
  ];

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  separatorKeysCodes = [ENTER, COMMA];

  chips = [
    { name: 'none', selected: false},
    { name: 'Primary', color: 'primary', selected: true },
    { name: 'Accent', color: 'accent', selected: true },
    { name: 'Warn', color: 'warn', selected: true },
  ];

  constructor() { }

  ngOnInit() {
      this.filteredOptions = this.myControl.valueChanges
         .startWith('')
         .map(val => this.filter(val));
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our color
    if ((value || '').trim()) {
      this.chips.push({ name: value.trim(), selected: true });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(color: any): void {
    let index = this.chips.indexOf(color);

    if (index >= 0) {
      this.chips.splice(index, 1);
    }
  }

  filter(val: string): string[] {
      return this.options.filter(option =>
        option.toLowerCase().indexOf(val.toLowerCase()) === 0);
   }

  uploadFile(event, file: ElementRef) {
    let files1 = event.target.files[0];
    file['value'] = (files1) ? files1.name : '';
  }

}
