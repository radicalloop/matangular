import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
import { DialogComponent } from './dialog/dialog.component';
import { WizardComponent } from './wizard/wizard.component';
import { OtherElementsComponent } from './other-elements/other-elements.component';

const routes: Routes = [
	{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LayoutComponent,
        children : [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'forms', component: FormsComponent },
            { path: 'tables', component: TablesComponent },
            { path: 'dialog', component: DialogComponent },
            { path: 'wizard', component: WizardComponent },
            { path: 'otherElements', component: OtherElementsComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
