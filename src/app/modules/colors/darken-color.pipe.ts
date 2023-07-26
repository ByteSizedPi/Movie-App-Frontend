import { Pipe, PipeTransform } from '@angular/core';

const getHex = (hex: string, from: number, to: number) =>
	parseInt(hex.substring(from, to), 16);

@Pipe({
	name: 'darkenColor',
})
export class DarkenColorPipe implements PipeTransform {
	transform(color: string, perc: number) {
		let r = getHex(color, 1, 3) * perc;
		let g = getHex(color, 3, 5) * perc;
		let b = getHex(color, 5, 7) * perc;
		return `rgb(${r},${g},${b})`;
	}
}
