import { Directive, ElementRef, Input } from '@angular/core';
import { ImgCacheService } from '../services/img-cache.service';

@Directive({
	selector: '[imgCache]',
})
export class ImgCacheDirective {
	private el: HTMLImageElement;

	@Input('imgCache') set src(url: string) {
		this.imgCache.getImage(url).subscribe((url) => {
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
