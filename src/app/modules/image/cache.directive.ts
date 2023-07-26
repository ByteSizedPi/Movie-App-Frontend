import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[imgCache]',
})
export class CacheDirective {
	private el: HTMLImageElement;

	@Input('imgCache') set src(url: string) {
		if (!url) url = 'assets/empty.png';

		this.el.src = url;

		this.el.onload = () => {
			this.el.style.animation = 'none';
		};
	}

	constructor({ nativeElement: el }: ElementRef<HTMLImageElement>) {
		this.el = el;
	}
}
