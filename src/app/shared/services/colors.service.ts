import { map, tap } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { Palette } from '../models/Types';
import { Injectable } from '@angular/core';
import Vibrant from 'node-vibrant';
import { Timer } from '../../test/Timer';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  private palette: Palette;

  getPalette = (url: string): Observable<Palette> => {
    let t = new Timer('getPalette');
    t.next();
    return from(new Vibrant(url).getPalette()).pipe(
      map((palette) => ({
        vibrant: <string>palette.Vibrant?.hex,
        muted: <string>palette.Muted?.hex,
        lightVibrant: <string>palette.LightVibrant?.hex,
        lightMuted: <string>palette.LightMuted?.hex,
        darkVibrant: <string>palette.DarkVibrant?.hex,
        darkMuted: <string>palette.DarkMuted?.hex,
      })),
      tap((palette) => t.next())
    );
  };
  setPalette = (url: string) =>
    this.getPalette(url).pipe(map((palette) => (this.palette = palette)));

  getCurPalette = () => this.palette;
}
