import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { MenuItem } from '../../domain/entities/menu-item.interface';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ``,
})
export class SidebarComponent {
  public collapseClass = 'collapse';
  public collapseClassProfile = 'collapse';
  private isCollapse = false;
  private isCollapseProfile = false;

  public menu: MenuItem[];

  constructor(private readonly sidebarService: SidebarService) {
    this.menu = this.sidebarService.menu;
  }

  public toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.collapseClass = this.isCollapse ? 'collapse in' : 'collapse';
  }

  public toggleCollapseProfile(): void {
    this.isCollapseProfile = !this.isCollapseProfile;
    this.collapseClassProfile = this.isCollapseProfile ? 'collapse in' : 'collapse';
  }
}
