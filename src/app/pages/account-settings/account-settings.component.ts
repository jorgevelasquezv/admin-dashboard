import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: ``,
})
export class AccountSettingsComponent implements OnInit {
  constructor(private readonly settingsService: SettingsService) {}

  ngOnInit(): void {
    this.settingsService.loadSelectorTheme(
      document.querySelectorAll('.selector')
    );
  }

  public changeTheme(theme: string) {
    this.settingsService.changeTheme(theme);
  }
}
