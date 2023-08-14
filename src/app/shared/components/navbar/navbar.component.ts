import { AfterViewInit, Component } from '@angular/core';
import {
	debounceTime,
	distinctUntilChanged,
	filter,
	fromEvent,
	map,
	merge,
} from 'rxjs';
import { DOM } from '../../services/Utils';
import { SearchService } from '../search/search.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit {
	searchState: boolean = false;

	constructor(public searchService: SearchService) {
		this.searchService.modalState$
			.pipe(filter((state) => !!state))
			.subscribe((_) => (this.searchState = true));
	}

	ngAfterViewInit(): void {
		const searchInput = DOM.Id<HTMLInputElement>('search-input');

		const search$ = fromEvent<InputEvent>(searchInput, 'input').pipe(
			map(({ target }) => (target as HTMLInputElement)?.value),
			debounceTime(500),
			distinctUntilChanged()
		);
		const focus$ = fromEvent<FocusEvent>(searchInput, 'focus').pipe(
			map(({ target }) => (target as HTMLInputElement)?.value)
		);

		merge(search$, focus$).subscribe((query) => {
			this.searchService.search(query);
		});
	}

	close() {
		DOM.query<HTMLInputElement>('input').value = '';
		this.searchService.pushModalState(false);

		DOM.Id('search-modal').style.animation = 'fade-out 0.2s forwards';
		setTimeout(() => {
			this.searchState = false;
		}, 200);
	}
}
