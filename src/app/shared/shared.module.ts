import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
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
  MatProgressBarModule,
  MatTableModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatSnackBarModule,
  MatDialogModule,
  MatSliderModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule
} from '@angular/material';
import { SidenavAccordionDirective } from './directives/sidenav-accordian.directive';
import { MessageAccordionDirective } from './directives/message-container.derective';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: true
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
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    PerfectScrollbarModule,
    MatNativeDateModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    ChartsModule
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
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatPaginatorModule,
    SidenavAccordionDirective,
    MatDialogModule,
    MatSnackBarModule,
    MatSliderModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    ChartsModule,
    MessageAccordionDirective
  ],
  declarations: [SidenavAccordionDirective, MessageAccordionDirective],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule { }
