import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';

import { ComponentsModule } from './components/components.module';
import { PagesRoutingModule } from './pages-routing.module';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { GraphOneComponent } from './graph-one/graph-one.component';
import { GraphTwoComponent } from './graph-two/graph-two.component';
import { GraphThreeComponent } from './graph-three/graph-three.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    DashboardComponent,
    GraphOneComponent,
    GraphTwoComponent,
    GraphThreeComponent,
    ProgressComponent,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent,
  ],
  imports: [CommonModule, ComponentsModule, PagesRoutingModule, SharedModule],
})
export class PagesModule {}
