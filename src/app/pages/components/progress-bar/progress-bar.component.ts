import { Component, Input } from '@angular/core';

@Component({
  selector: 'pages-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css',
})
export class ProgressBarComponent {
  @Input() progress: number = 25;
  @Input() background: string = 'bg-primary';

  get percentaceProgress(): string {
    return `${this.progress}%`;
  }

  get progressStyle(): string {
    return `progress-bar active progress-bar-striped ${this.background}`;
  }
}
