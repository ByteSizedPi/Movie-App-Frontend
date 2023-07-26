import { NgModule } from '@angular/core';
import { AsTitlePipe } from './as-title.pipe';
import { AsyncMoviesPipe } from './async-movies.pipe';
import { AvatarPipe } from './avatar.pipe';
import { ColorPipe } from './color.pipe';
import { GenreStylesPipe } from './genre-styles.pipe';
import { LogoPipe } from './logo.pipe';
import { RuntimePipe } from './runtime.pipe';
const PIPES = [
	RuntimePipe,
	AvatarPipe,
	LogoPipe,
	AsTitlePipe,
	ColorPipe,
	AsyncMoviesPipe,
	GenreStylesPipe,
];
@NgModule({
	declarations: PIPES,
	exports: PIPES,
})
export class PipesModule {}
