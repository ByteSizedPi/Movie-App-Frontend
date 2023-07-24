import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'backdrop',
	pure: true,
})
export class BackdropPipe implements PipeTransform {
	private readonly backdropSizes = ['w300', 'w780', 'w1280', 'original'];
	private readonly BASE = 'https://image.tmdb.org/t/p/';

	transform(url: string, res: number): string {
		return url ? this.BASE + this.backdropSizes[res] + url : '';
	}
}
