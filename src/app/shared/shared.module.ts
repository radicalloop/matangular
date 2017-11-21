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
  MatGridListModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatProgressBarModule
} from '@angular/material';
import { SidenavAccordionDirective } from './directives/sidenav-accordian.directive';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

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
    MatGridListModule,
    MatChipsModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    PerfectScrollbarModule
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
    MatGridListModule,
    MatChipsModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    SidenavAccordionDirective
  ],
  declarations: [SidenavAccordionDirective],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule { }
