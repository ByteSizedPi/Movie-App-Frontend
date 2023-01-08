import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Palette } from '../models/Types';
import { ColorsService } from '../services/colors.service';

@Pipe({
  name: 'color',
  pure: true,
})
export class ColorPipe implements PipeTransform {
  constructor(private colorsService: ColorsService) {}
  transform(url: string, color: keyof Palette & string): Observable<string> {
    return this.colorsService
      .getPalette(url)
      .pipe(map((palette) => palette[color]));
  }
}
