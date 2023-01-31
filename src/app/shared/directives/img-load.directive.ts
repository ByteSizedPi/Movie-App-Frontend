import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[imgLoad]',
})
export class ImgLoadDirective {
  @Output('imgLoad') callback: EventEmitter<void> = new EventEmitter();

  constructor({ nativeElement: img }: ElementRef) {
    img.style.opacity = 0;
    img.onload = () => {
      img.style.opacity = 1;
      this.callback.emit();
    };
  }
}
