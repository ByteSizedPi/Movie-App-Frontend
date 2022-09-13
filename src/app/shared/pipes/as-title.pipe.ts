import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asTitle',
})
export class AsTitlePipe implements PipeTransform {
  transform = (value: string): string => value.replace(/_/g, ' ');
}
