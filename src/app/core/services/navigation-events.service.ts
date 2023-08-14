import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
	BehaviorSubject,
	Observable,
	combineLatest,
	filter,
	fromEvent,
} from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { MovieModalService } from 'src/app/shared/components/movie-modal/movie-modal.service';
import { SearchService } from '../../shared/components/search/search.service';

export enum NavCollection {
	BROWSE = '/browse',
}
@Injectable({
	providedIn: 'root',
})
export class NavigationEventsService {
	docVisible: Observable<boolean>;
	navEvent: Observable<string>;
	navSubject: BehaviorSubject<boolean> = new BehaviorSubject(true);
	listeners: { [key: string]: Observable<boolean> };

	constructor(
		private router: Router,
		private modalService: MovieModalService,
		private searchService: SearchService
	) {
		this.docVisible = fromEvent(document, 'visibilitychange').pipe(
			map((_) => document.visibilityState === 'visible'),
			startWith(true)
		);

		this.navEvent = this.router.events.pipe(
			filter((e) => e instanceof NavigationEnd),
			map((event) => (<NavigationEnd>event).url)
		);

		this.registerListeners();
	}

	registerListeners() {
		this.listeners = {
			BROWSE: this.register('/browse', [
				this.modalService.toggleSubject$.pipe(map((v) => !!v)),
				this.searchService.modalState$,
			]),
		};
	}

	register(url: string, triggers: Observable<boolean>[] = []) {
		this.navEvent
			.pipe(
				map((event) => event === url),
				tap((v) => this.navSubject.next(v))
			)
			.subscribe();

		const trig = triggers.map((t) => t.pipe(map((v) => !v)));

		return combineLatest([this.navSubject, ...trig]).pipe(
			map((events) => events.every((e) => e))
		);
	}
}
