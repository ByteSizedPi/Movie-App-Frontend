import { Resolution } from 'src/app/shared/models/Types';
import { Pipe, PipeTransform } from '@angular/core';
import Movie from '../types/Movie';

@Pipe({
  name: 'backdrop',
})
export class BackdropPipe implements PipeTransform {
  private backdropSizes = ['w300', 'w780', 'w1280', 'original'];
  private BASE = 'https://image.tmdb.org/t/p/';

  transform({ backdrop: url }: Movie, res: Resolution): string {
    return url
      ? this.BASE + this.backdropSizes[res] + url
      : 'src/assets/no-image-1.png';
  }
}
