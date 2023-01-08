import { Pipe, PipeTransform } from '@angular/core';
import { getTextColor } from '../services/Utils';

@Pipe({
  name: 'textColor',
  pure: true,
})
export class TextColorPipe implements PipeTransform {
  transform = (color: string | null): '#fff' | '#000' =>
    getTextColor(color ?? '');
}
