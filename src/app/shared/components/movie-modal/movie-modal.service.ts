import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DOM } from '../../services/Utils';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../types/Movie';

@Injectable({
	providedIn: 'root',
})
export class MovieModalService {
	isOpen = false;
	toggleSubject$: BehaviorSubject<Movie | undefined> = new BehaviorSubject<
		Movie | undefined
	>(undefined);

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
					this.toggleSubject$.next(movie);
				});
				DOM.lockScroll();
			},
			this.isOpen ? 201 : 0
		);
	}

	close = () => {
		if (!this.isOpen) return;
		this.toggleSubject$.next(undefined);
		setTimeout(() => (this.isOpen = false), 200);
		DOM.allowScroll();
	};
}
