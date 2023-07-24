import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieGroup } from '../models/Types';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../types/Movie';

@Pipe({
	name: 'asyncMovies',
})
export class AsyncMoviesPipe implements PipeTransform {
	constructor(private moviesService: MoviesService) {}
	transform = (group: MovieGroup): Observable<Movie[]> =>
		this.moviesService.getMovieGroup(group);
}
