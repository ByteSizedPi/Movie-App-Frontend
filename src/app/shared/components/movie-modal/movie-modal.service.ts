import { EventEmitter, Injectable } from '@angular/core';
import { BODY } from '../../services/Utils';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../types/Movie';

@Injectable({
	providedIn: 'root',
})
export class MovieModalService {
	open$: EventEmitter<Movie> = new EventEmitter<Movie>();
	close$: EventEmitter<void> = new EventEmitter<void>();

	isOpen = false;

	onChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	// stateEvent = new Subject<Movie | null>();

	constructor(private moviesService: MoviesService) {}

	open(tmdb_id: number | undefined) {
		if (tmdb_id === undefined) return;

		// if a user clicks on a movie while the modal is open, close it first
		if (this.isOpen) this.close();

		// wait for the modal to close before opening it again
		setTimeout(
			() => {
				this.isOpen = true;
				this.moviesService.getMovieByTMDBId(tmdb_id).subscribe((movie) => {
					this.open$.emit(movie);
				});
				this.lockScroll();
			},
			this.isOpen ? 201 : 0
		);
	}

	close = () => {
		if (!this.isOpen) return;
		this.close$.emit();
		setTimeout(() => (this.isOpen = false), 200);
		this.allowScroll();
	};

	lockScroll = () => (BODY.style.overflowY = 'hidden');
	allowScroll = () => (BODY.style.overflowY = 'auto');
}
