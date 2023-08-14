import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MovieModalService } from 'src/app/shared/components/movie-modal/movie-modal.service';
import { MoviesService } from '../../services/movies.service';
import { PartialMovie } from '../../types/Movie';

export type Search = {
	query: string;
	content$: Observable<PartialMovie[]>;
};

@Injectable({
	providedIn: 'root',
})
export class SearchService {
	// private _toggleModal$: EventEmitter<boolean> = new EventEmitter();
	private _toggleModal$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	curQuery: string | undefined = undefined;
	curState: boolean = false;

	searchEvent$: BehaviorSubject<Search> = new BehaviorSubject({
		query: 'trending',
		content$: this.moviesService.getGroup('trending'),
	});

	constructor(
		private moviesService: MoviesService,
		private modalService: MovieModalService
	) {}

	get modalState$() {
		return this._toggleModal$;
	}

	pushModalState(toggle: boolean) {
		this._toggleModal$.next(toggle);
		this.curState = toggle;
	}

	search(query: string | undefined = undefined) {
		if (this.curState && query === this.curQuery) return;
		this.curQuery = query;
		this.pushModalState(true);

		let { searchMovies, getGroup } = this.moviesService;
		const obs = query ? searchMovies(query) : getGroup('trending');
		this.searchEvent$.next({
			query: query || 'trending',
			content$: obs,
		});
	}
}
