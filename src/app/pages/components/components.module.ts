import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { IncreaserComponent } from './increaser/increaser.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProgressBarComponent, IncreaserComponent],
  imports: [CommonModule, FormsModule],
  exports: [ProgressBarComponent, IncreaserComponent],
})
export class ComponentsModule {}
