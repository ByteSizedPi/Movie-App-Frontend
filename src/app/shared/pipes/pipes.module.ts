import { NgModule } from '@angular/core';
import { AsTitlePipe } from './as-title.pipe';
import { AsyncMoviesPipe } from './async-movies.pipe';
import { AvatarPipe } from './avatar.pipe';
import { BackdropPipe } from './backdrop.pipe';
import { ColorPipe } from './color.pipe';
import { LogoPipe } from './logo.pipe';
import { PosterPipe } from './poster.pipe';
import { RuntimePipe } from './runtime.pipe';
import { TextColorPipe } from './text-color.pipe';
const PIPES = [
  BackdropPipe,
  PosterPipe,
  RuntimePipe,
  AvatarPipe,
  LogoPipe,
  AsTitlePipe,
  ColorPipe,
  TextColorPipe,
  AsyncMoviesPipe,
];
@NgModule({
  declarations: PIPES,
  exports: PIPES,
})
export class PipesModule {}
