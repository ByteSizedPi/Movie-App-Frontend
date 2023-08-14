import { NgModule } from '@angular/core';
import { AsTitlePipe } from './as-title.pipe';
import { AsyncMoviesPipe } from './async-movies.pipe';
import { AvatarPipe } from './avatar.pipe';
import { GenreStylesPipe } from './genre-styles.pipe';
import { LogoPipe } from './logo.pipe';
import { RuntimePipe } from './runtime.pipe';
const PIPES = [
	RuntimePipe,
	AvatarPipe,
	LogoPipe,
	AsTitlePipe,

	AsyncMoviesPipe,
	GenreStylesPipe,
];
@NgModule({
	declarations: PIPES,
	exports: PIPES,
})
export class PipesModule {}
