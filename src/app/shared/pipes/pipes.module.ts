import { AsTitlePipe } from './as-title.pipe';
import { AvatarPipe } from './avatar.pipe';
import { NgModule } from '@angular/core';
import { BackdropPipe } from './backdrop.pipe';
import { PosterPipe } from './poster.pipe';
import { RuntimePipe } from './runtime.pipe';
import { LogoPipe } from './logo.pipe';
const PIPES = [
  BackdropPipe,
  PosterPipe,
  RuntimePipe,
  AvatarPipe,
  LogoPipe,
  AsTitlePipe,
];
@NgModule({
  declarations: PIPES,
  exports: PIPES,
})
export class PipesModule {}
