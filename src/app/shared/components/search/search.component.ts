import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Id } from '../../services/Utils';
import { MoviesService } from '../../services/movies.service';
import { PartialMovie } from '../../types/Movie';
import { MovieModalService } from '../movie-modal/movie-modal.service';
import { SearchService } from './search.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
	content: PartialMovie[] | undefined = undefined;
	contentSub: Subscription | undefined;
	itemsInARow: number = 0;
	gap: number = 4;
	loaded = false;

	constructor(
		public searchService: SearchService,
		private modal: MovieModalService,
		private moviesService: MoviesService
	) {
		this.contentSub = this.searchService.searchEvent$.subscribe(
			({ content$ }) => {
				this.content = undefined;

				content$.subscribe((movies) => {
					this.content = movies;
					this.resize();
				});
			}
		);
	}

	ngOnDestroy(): void {
		this.contentSub?.unsubscribe();
	}

	resize() {
		if (Id('search-container')) this.calcWidth();
	}

	size(): { width: string; height: string } {
		const newWidth = this.calcWidth();
		return {
			width: `${newWidth}px`,
			height: `${(3 / 2) * newWidth}px`,
		};
	}

	calcWidth() {
		let width = Id('search-container').clientWidth;
		const max_width = 160;
		this.itemsInARow = Math.ceil(width / max_width);
		return Math.floor(width / this.itemsInARow - 2 * this.gap - 0.1);
	}
}
