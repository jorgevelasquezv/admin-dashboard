import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    BreadCrumbComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    FooterComponent,
    BreadCrumbComponent,
    SidebarComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
