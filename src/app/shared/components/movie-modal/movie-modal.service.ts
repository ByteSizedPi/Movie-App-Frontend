import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BODY } from '../../services/Utils';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../types/Movie';

@Injectable({
	providedIn: 'root',
})
export class MovieModalService {
	open$: EventEmitter<Movie> = new EventEmitter<Movie>();
	close$: EventEmitter<void> = new EventEmitter<void>();
	private curMovie: Movie;
	isOpen = false;
	colorLoaded = false;
	onChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	stateEvent = new Subject<Movie | null>();

	constructor(private moviesService: MoviesService) {
		// this.stateEvent.subscribe((movie) => {
		// 	if (movie) this.openModal(movie);
		// 	else this.closeModal();
		// });
	}

	open(tmdb_id: number | undefined) {
		if (tmdb_id === undefined) return;

		// if a user clicks on a movie while the modal is open, close it first
		if (this.isOpen) this.closeModal();

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

	get movie() {
		return { ...this.curMovie };
	}

	openModal = (movie: Movie) => {
		if (this.isOpen) this.closeModal();
		setTimeout(
			() => {
				this.curMovie = movie;
				this.lockScroll();
				this.onChange.emit((this.isOpen = true));
			},
			this.isOpen ? 201 : 0
		);
	};

	closeModal = () => {
		if (!this.isOpen) return;
		this.close$.emit();
		setTimeout(() => (this.isOpen = false), 200);
		this.allowScroll();
	};

	lockScroll = () => (BODY.style.overflowY = 'hidden');
	allowScroll = () => (BODY.style.overflowY = 'auto');

	getRecommended = () =>
		this.moviesService.getRecommended(this.curMovie.tmdb_id);

	getSimilar = () => this.moviesService.getSimilar(this.curMovie.tmdb_id);
}
