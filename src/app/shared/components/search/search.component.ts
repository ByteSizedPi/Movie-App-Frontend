import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DOM } from '../../services/Utils';
import { PartialMovie } from '../../types/Movie';
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

	constructor(public searchService: SearchService) {
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
		if (DOM.Id('search-container')) this.calcWidth();
	}

	size(): { w: string; h: string } {
		const newWidth = this.calcWidth();
		return {
			w: `${newWidth}px`,
			h: `${(3 / 2) * newWidth}px`,
		};
	}

	calcWidth() {
		let width = DOM.Id('search-container').clientWidth;
		const max_width = 160;
		this.itemsInARow = Math.ceil(width / max_width);
		return Math.floor(width / this.itemsInARow - 2 * this.gap - 0.1);
	}
}
