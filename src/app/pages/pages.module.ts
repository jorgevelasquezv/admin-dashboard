import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { GraphOneComponent } from './graph-one/graph-one.component';
import { GraphTwoComponent } from './graph-two/graph-two.component';
import { GraphThreeComponent } from './graph-three/graph-three.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    PagesComponent,
    GraphOneComponent,
    GraphTwoComponent,
    GraphThreeComponent,
    NotFoundPageComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, PagesRoutingModule],
})
export class PagesModule {}
