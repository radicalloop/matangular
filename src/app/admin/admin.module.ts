import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ThemeService } from '../shared/services/theme.service';

import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
import { DialogComponent } from './dialog/dialog.component';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import { LoaderDialogComponent } from './dialog/loader-dialog/loader-dialog.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { WizardComponent } from './wizard/wizard.component';
import { OtherElementsComponent } from './other-elements/other-elements.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ErrorComponent } from './error/error.component';
import { DatatablesComponent } from './datatables/datatables.component';
import { ChatComponent } from './chat/chat.component';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { ImageDialogComponent } from './dashboard/image-dialog/image-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    QuillModule,
    NgxDatatableModule
  ],
  providers: [ThemeService],
  entryComponents: [ConfirmDialogComponent, LoaderDialogComponent, ImageDialogComponent],
  declarations: [LayoutComponent, DashboardComponent, HeaderComponent, SidebarComponent, BreadcrumbComponent, ProfileComponent, FormsComponent, TablesComponent, DialogComponent, ConfirmDialogComponent, LoaderDialogComponent, SettingsComponent, WizardComponent, OtherElementsComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent, ErrorComponent, DatatablesComponent, ChatComponent, GridSystemComponent, ImageDialogComponent]
})
export class AdminModule { }
