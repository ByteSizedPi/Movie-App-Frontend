import { Directive, ElementRef, Input } from '@angular/core';
import { CacheService } from './cache.service';

@Directive({
	selector: '[imgCache]',
})
export class CacheDirective {
	private el: HTMLImageElement;

	@Input('imgCache') set src(url: string) {
		if (!url) url = 'assets/empty.png';

		this.imgCache.getImage(url).subscribe((url) => {
			this.el.src = url;
			this.el.style.animation = 'none';
			this.el.style.opacity = '0.1';
			this.el.style.animation = 'fade-in 0.4s ease-in-out forwards';
		});
	}

	constructor(
		{ nativeElement: el }: ElementRef<HTMLImageElement>,
		private imgCache: CacheService
	) {
		this.el = el;
	}
}
