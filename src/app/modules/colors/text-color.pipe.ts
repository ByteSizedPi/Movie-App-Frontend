import { Pipe, PipeTransform } from '@angular/core';

const getHex = (hex: string, from: number, to: number) =>
	parseInt(hex.substring(from, to), 16);

const getTextColor = (hex: string = '#fff') => {
	return getHex(hex, 1, 3) * 0.299 +
		getHex(hex, 3, 5) * 0.587 +
		getHex(hex, 5, 7) * 0.114 >
		150
		? '#000'
		: '#fff';
};

@Pipe({
	name: 'textColor',
})
export class TextColorPipe implements PipeTransform {
	transform = (color: string): '#fff' | '#000' => getTextColor(color ?? '');
}
