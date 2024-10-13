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

  public changeValue(value: number) {
    if (this.currentValue >= 100 && value > 0) {
      this.currentValue = 100;
      this.emitValue();
      return;
    }

    if (this.currentValue <= 0 && value < 0) {
      this.currentValue = 0;
      this.emitValue();
      return;
    }

    this.currentValue += value;
    this.emitValue();
  }

  public get styleButton(): string {
    return `btn ${this.backgroundButton}`;
  }

  public emitValue() {
    this.value.emit(this.currentValue);
  }
}
