import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[longPress]'
})
export class LongPressDirective {

  touchstart: any;
  @Input() longPress!: number;
  @Output() itemLongPressed = new EventEmitter<number>();
  
  constructor() { 
  }

  @HostListener('touchstart',  ['$event'])
  onMouseDown(e: MouseEvent) {
    this.touchstart = setTimeout(() => {
      this.itemLongPressed.emit(this.longPress);
    }, 700);
  }

  @HostListener('touchend',  ['$event'])
  onMouseUp(e: MouseEvent) {
    clearTimeout(this.touchstart);
  }

}
