import { Injectable } from '@angular/core';
import { MenuItem } from '../domain/entities/menu-item.interface';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private readonly _menu: MenuItem[] = [
    {
      separator: 'Personal',
      title: 'Personal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Progress Bar', url: 'progress' },
        { title: 'Graph One', url: 'graph-one' },
        { title: 'Graph Two', url: 'graph-two' },
        { title: 'Graph Three', url: 'graph-three' },
        { title: 'Settings', url: 'settings' },
        { title: 'Promises', url: 'promises' },
        { title: 'RxJs', url: 'rxjs' },
      ],
    },
  ];

  constructor() {}

  public get menu(): MenuItem[] {
    return this._menu;
  }
}
