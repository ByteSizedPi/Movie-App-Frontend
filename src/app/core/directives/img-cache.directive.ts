import { Directive, ElementRef, Input } from '@angular/core';
import { Timer } from 'src/app/test/Timer';
import { ImgCacheService } from '../services/img-cache.service';

@Directive({
  selector: '[imgCache]',
})
export class ImgCacheDirective {
  private el: HTMLImageElement;

  @Input('imgCache') set src(url: string) {
    // let timer = new Timer('imgCache');
    this.imgCache.getImage(url).subscribe((url) => {
      // timer.next();
      this.el.src = url;
    });
  }

  constructor(
    { nativeElement: el }: ElementRef<HTMLImageElement>,
    private imgCache: ImgCacheService
  ) {
    this.el = el;
  }
}
