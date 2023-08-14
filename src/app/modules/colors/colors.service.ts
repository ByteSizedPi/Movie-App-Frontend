import { Injectable } from '@angular/core';
import Vibrant from 'node-vibrant';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Palette } from 'src/app/shared/models/Types';

@Injectable({
	providedIn: 'root',
})
export class ColorsService {
	private palette: Palette;

	getPalette = (url: string): Observable<Palette> => {
		return from(new Vibrant(url).getPalette()).pipe(
			map((palette) => ({
				vibrant: <string>palette.Vibrant?.hex,
				muted: <string>palette.Muted?.hex,
				lightVibrant: <string>palette.LightVibrant?.hex,
				lightMuted: <string>palette.LightMuted?.hex,
				darkVibrant: <string>palette.DarkVibrant?.hex,
				darkMuted: <string>palette.DarkMuted?.hex,
			}))
		);
	};
	setPalette = (url: string) =>
		this.getPalette(url).pipe(map((palette) => (this.palette = palette)));

	getCurPalette = () => this.palette;
}
