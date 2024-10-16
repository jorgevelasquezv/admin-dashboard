import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFuntions(): any;

@Component({
  selector: 'pages-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private readonly settingsService: SettingsService) {
    customInitFuntions();
  }
}
