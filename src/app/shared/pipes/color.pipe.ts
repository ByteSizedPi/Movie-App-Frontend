import { Pipe, PipeTransform } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PaletteColor } from '../models/Types';
import { ColorsService } from '../services/colors.service';

@Pipe({
	name: 'color',
	pure: true,
})
export class ColorPipe implements PipeTransform {
	constructor(private colorsService: ColorsService) {}
	transform(url: string, color: PaletteColor): Observable<string> {
		return this.colorsService
			.getPalette(url)
			.pipe(map((palette) => palette[color]));
	}
}
