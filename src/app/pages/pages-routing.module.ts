import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphOneComponent } from './graph-one/graph-one.component';
import { GraphTwoComponent } from './graph-two/graph-two.component';
import { GraphThreeComponent } from './graph-three/graph-three.component';
import { DashboardComponent } from './dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'progress',
        component: ProgressComponent,
        data: { title: 'Progress Bar' },
      },
      {
        path: 'graph-one',
        component: GraphOneComponent,
        data: { title: 'Graph One' },
      },
      {
        path: 'graph-two',
        component: GraphTwoComponent,
        data: { title: 'Graph Two' },
      },
      {
        path: 'graph-three',
        component: GraphThreeComponent,
        data: { title: 'Graph Three' },
      },
      {
        path: 'settings',
        component: AccountSettingsComponent,
        data: { title: 'Account Settings' },
      },
      {
        path: 'promises',
        component: PromisesComponent,
        data: { title: 'Promises' },
      },
      {
        path: 'rxjs',
        component: RxjsComponent,
        data: { title: 'Rxjs' },
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
