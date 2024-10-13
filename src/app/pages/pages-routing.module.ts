import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { GraphOneComponent } from './graph-one/graph-one.component';
import { GraphTwoComponent } from './graph-two/graph-two.component';
import { GraphThreeComponent } from './graph-three/graph-three.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
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
    ],
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
