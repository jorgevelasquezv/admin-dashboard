import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphOneComponent } from './graph-one/graph-one.component';
import { GraphTwoComponent } from './graph-two/graph-two.component';
import { GraphThreeComponent } from './graph-three/graph-three.component';
import { DashboardComponent } from './dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'progress',
        component: ProgressComponent,
      },
      {
        path: 'graph-one',
        component: GraphOneComponent,
      },
      {
        path: 'graph-two',
        component: GraphTwoComponent,
      },
      {
        path: 'graph-three',
        component: GraphThreeComponent,
      },
      {
        path: 'settings',
        component: AccountSettingsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
