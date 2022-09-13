import { Pipe, PipeTransform } from '@angular/core';
import Review from '../types/Review';

@Pipe({
  name: 'avatar',
})
export class AvatarPipe implements PipeTransform {
  private BASE = 'https://image.tmdb.org/t/p/original';
  transform({ author_details: { avatar_path: url } }: Review): string {
    if (!url) return '';
    if (url.substring(1, 5) === 'http') return url.substring(1);
    return this.BASE + url;
  }
}
