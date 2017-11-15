import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule ,
  MatTooltipModule,
  MatCheckboxModule,
  MatListModule,
  MatSlideToggleModule,
} from '@angular/material';
import { SidenavAccordionDirective } from './directives/sidenav-accordian.directive';

@NgModule({
  imports: [
    MatButtonModule,
  	MatMenuModule,
  	MatToolbarModule,
  	MatIconModule,
  	MatCardModule,
  	MatSidenavModule ,
  	MatTooltipModule,
  	MatCheckboxModule,
  	MatListModule,
  	MatSlideToggleModule,
    FlexLayoutModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatListModule,
    MatSlideToggleModule,
    FlexLayoutModule
  ],
  declarations: [SidenavAccordionDirective]
})
export class SharedModule { }
