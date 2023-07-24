import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BODY, Id } from '../../services/Utils';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../types/Movie';

@Injectable({
	providedIn: 'root',
})
export class MovieModalService {
	private curMovie: Movie;
	isOpen = false;
	colorLoaded = false;
	onChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	stateEvent = new Subject<Movie | null>();

	constructor(private moviesService: MoviesService) {
		this.stateEvent.subscribe((movie) => {
			if (movie) this.openModal(movie);
			else this.closeModal();
		});
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
		Id('movie-modal').style.animation = 'slide-out .2s forwards';
		Id('backdrop').style.animation = 'fade-out .2s forwards';
		setTimeout(() => this.onChange.emit((this.isOpen = false)), 200);
		this.allowScroll();
	};

	lockScroll = () => (BODY.style.overflowY = 'hidden');
	allowScroll = () => (BODY.style.overflowY = 'auto');

	getRecommended = () =>
		this.moviesService.getRecommended(this.curMovie.tmdb_id);

	getSimilar = () => this.moviesService.getSimilar(this.curMovie.tmdb_id);
}
