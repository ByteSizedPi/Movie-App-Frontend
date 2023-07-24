import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'poster',
})
export class PosterPipe implements PipeTransform {
	private readonly posterSizes = [
		'w92',
		'w154',
		'w185',
		'w342',
		'w500',
		'w780',
		'original',
	];
	private readonly BASE = 'https://image.tmdb.org/t/p/';
	transform(url: string, res: number): string {
		return url ? this.BASE + this.posterSizes[res] + url : '';
	}
}
