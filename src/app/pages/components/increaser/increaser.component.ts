import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pages-increaser',
  templateUrl: './increaser.component.html',
  styles: ``,
})
export class IncreaserComponent {
  @Output() public value: EventEmitter<number> = new EventEmitter();
  @Input('value') public currentValue: number = 0;
  @Input() public backgroundButton: string = 'btn-primary';

  public changeValue(value: number): void {
    if (this.currentValue >= 100 && value > 0) {
      this.currentValue = 100;
    } else if (this.currentValue <= 0 && value < 0) {
      this.currentValue = 0;
    } else {
      this.currentValue += value;
    }
    this.onChangeValue(this.currentValue);
  }

  public get styleButton(): string {
    return `btn ${this.backgroundButton}`;
  }

  public onChangeValue(value: number) {
    if (value > 100) {
      this.currentValue = 100;
    } else if (value < 0) {
      this.currentValue = 0;
    } else {
      this.currentValue = value;
    }
    this.value.emit(value);
  }
}
