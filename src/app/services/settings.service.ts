import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private readonly themeLink: HTMLElement | null =
    document.querySelector('#theme');
  private linksSelectorTheme: NodeListOf<Element> =
    document.querySelectorAll('.selector');

  constructor() {
    this.loadTheme();
  }

  public changeTheme(theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    this.themeLink?.setAttribute('href', url);
    this.saveTheme(theme);
    this.removeSelectorTheme(theme);
  }

  private saveTheme(theme: string) {
    localStorage.setItem('theme', theme);
  }

  public loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.changeTheme(theme);
      this.removeSelectorTheme(theme);
    }
  }

  public loadSelectorTheme(nodeList: NodeListOf<Element>) {
    this.linksSelectorTheme = nodeList;
    this.loadTheme();
  }

  private removeSelectorTheme(theme: string): void {
    this.linksSelectorTheme.forEach((link) => {
      link.classList.remove('working');
      if (link.getAttribute('data-theme') === theme) {
        link.classList.add('working');
      }
    });
  }
}
