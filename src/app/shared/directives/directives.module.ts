import { NgModule } from '@angular/core';
import { ImgLoadDirective } from 'src/app/shared/directives/img-load.directive';
import { StreamMovieDirective } from './stream-movie.directive';
import { ViewMovieDirective } from './view-movie.directive';

const DIRECTIVES = [ImgLoadDirective, StreamMovieDirective, ViewMovieDirective];
@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
})
export class DirectivesModule {}
