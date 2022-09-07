import { map } from "rxjs/operators";
import { Observable, from } from "rxjs";
import { Palette } from "../models/Types";
import { Injectable } from "@angular/core";
import Vibrant from "node-vibrant";

@Injectable({
	providedIn: "root",
})
export class ColorsService {
	private palette: Palette;

	getPalette = (url: string): Observable<Palette> =>
		from(new Vibrant(url).getPalette()).pipe(
			map((palette) => ({
				vibrant: <string>palette.Vibrant?.getHex(),
				muted: <string>palette.Muted?.getHex(),
				lightVibrant: <string>palette.LightVibrant?.getHex(),
				lightMuted: <string>palette.LightMuted?.getHex(),
				darkVibrant: <string>palette.DarkVibrant?.getHex(),
				darkMuted: <string>palette.DarkMuted?.getHex(),
			}))
		);

	setPalette = (url: string) =>
		this.getPalette(url).pipe(map((palette) => (this.palette = palette)));

	getCurPalette = () => this.palette;
}
