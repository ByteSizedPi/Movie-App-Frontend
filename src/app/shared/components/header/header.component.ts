import {
	Component,
	ElementRef,
	Input,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';
import {
	Observable,
	Subject,
	Subscription,
	fromEvent,
	interval,
	map,
} from 'rxjs';
import {
	delay,
	filter,
	mergeMap,
	startWith,
	switchMap,
	tap,
} from 'rxjs/operators';
import { NavigationEventsService } from 'src/app/core/services/navigation-events.service';
import { BackdropPipe } from 'src/app/modules/image/backdrop.pipe';
import { MovieModalService } from 'src/app/shared/components/movie-modal/movie-modal.service';
import { mod } from 'src/app/shared/services/Utils';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { ImgCacheService } from '../../../core/services/img-cache.service';
import { MoviesService } from '../../services/movies.service';
import { SearchService } from '../../services/search.service';
import { Movie } from '../../types/Movie';
import {
	InfoButtonProps,
	PlayButtonProps,
} from '../action-button/action-button.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
	playButton = PlayButtonProps;
	infoButton = InfoButtonProps;
	@Input() asyncMovies: Observable<Movie[]>;
	@ViewChild('bg') bg: ElementRef<HTMLImageElement>;
	private offset = 0;
	movies: Movie[] = [];
	showImg = false;
	showText = false;
	firstLoad: Subject<number> = new Subject();
	firstLoaded = false;
	slideSub: Subscription;
	curMovie: Movie;
	moviesReady: Subject<number> = new Subject();

	constructor(
		public moviesService: MoviesService,
		public modalService: MovieModalService,
		private searchService: SearchService,
		public colorsService: ColorsService,
		private navEventService: NavigationEventsService,
		private imgCache: ImgCacheService
	) {
		this.slideAnimation();
	}

	ngOnDestroy() {
		this.slideSub.unsubscribe();
	}

	loadFirst() {
		this.firstLoad.next(1);
		this.firstLoaded = true;
	}

	slideAnimation() {
		let modal = this.modalService.onChange.pipe(
			map((v) => !v),
			startWith(true)
		);
		let search = this.searchService.onChange.pipe(
			map((v) => !v),
			startWith(true)
		);

		const canSlide = this.navEventService.init('/home', [modal, search]);

		this.moviesReady
			.pipe(
				tap((_) => (this.curMovie = this.movies[0])),
				switchMap((_) => this.firstLoad),
				tap((_) => (this.showImg = true)),
				delay(500),
				tap((_) => (this.showText = true))
			)
			.subscribe();

		this.slideSub = interval(15_000)
			.pipe(
				// page visible
				// withLatestFrom(canSlide),
				// filter(([_, canSlide]) => this.curMovie && canSlide),
				filter((_) => !!this.bg),
				tap((_) => (this.showText = false)),
				delay(500),
				tap((_) => (this.showImg = false)),
				delay(500),
				switchMap((_) => {
					this.curMovie = this.movies[mod(++this.offset, this.movies.length)];
					return fromEvent(this.bg.nativeElement, 'load');
				}),
				tap((_) => (this.showImg = true)),
				delay(500),
				tap((_) => (this.showText = true))
			)
			.subscribe();
	}

	ngOnInit(): void {
		this.asyncMovies
			.pipe(
				switchMap((m) => m),
				filter(({ backdrop: bd }) => !!bd),
				mergeMap((movie) =>
					this.imgCache
						.getImage(new BackdropPipe().transform(movie.backdrop, 3))
						.pipe(map((_) => this.movies.push(movie)))
				)
			)
			.subscribe((_) => {
				if (!this.curMovie) this.moviesReady.next(1);
			});
	}
}
