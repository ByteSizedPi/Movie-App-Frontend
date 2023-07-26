import { Pipe, PipeTransform } from '@angular/core';
import { Palette } from '../models/Types';

type GenreStyles = {
	color: string;
	backgroundColor: string;
	border: string;
};

@Pipe({
	name: 'genreStyles',
})
export class GenreStylesPipe implements PipeTransform {
	transform({ lightVibrant, darkMuted }: Palette): GenreStyles {
		return {
			color: lightVibrant,
			backgroundColor: `${darkMuted}40`,
			border: `1px solid ${lightVibrant}`,
		};
	}
}
