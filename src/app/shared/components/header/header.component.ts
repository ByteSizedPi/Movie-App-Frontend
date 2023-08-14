import {
	Component,
	ElementRef,
	Input,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { delay, filter, switchMap, tap } from 'rxjs/operators';
import { NavigationEventsService } from 'src/app/core/services/navigation-events.service';
import { MovieModalService } from 'src/app/shared/components/movie-modal/movie-modal.service';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { ImgCacheService } from '../../../core/services/img-cache.service';
import { mod } from '../../services/Utils';
import { MoviesService } from '../../services/movies.service';
import { PartialMovie } from '../../types/Movie';
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

	@Input() asyncContent: Observable<PartialMovie[]>;
	@ViewChild('bg') bg: ElementRef<HTMLImageElement>;

	imgLoaded: Subject<boolean> = new Subject();
	moviesReady: Subject<void> = new Subject();
	offset = 0;
	movies: PartialMovie[] = [];
	showImg = false;
	showText = false;
	firstLoaded = false;
	slideSub: Subscription;
	curMovie: PartialMovie;

	constructor(
		public moviesService: MoviesService,
		public modalService: MovieModalService,
		public colorsService: ColorsService,
		private navEventService: NavigationEventsService,
		private imgCache: ImgCacheService
	) {
		this.slideAnimation();
	}

	ngOnDestroy() {
		this.slideSub.unsubscribe();
	}

	trueImg = () => (this.showImg = true);
	falseImg = () => (this.showImg = false);
	trueText = () => (this.showText = true);
	falseText = () => (this.showText = false);

	slideAnimation() {
		const navEvent = () =>
			this.navEventService.listeners['BROWSE'].pipe(filter((v) => v));

		this.slideSub = this.imgLoaded
			.pipe(
				switchMap(navEvent),
				tap(this.trueImg),
				delay(500),
				tap(this.trueText),
				delay(5_000),
				tap(this.falseText),
				delay(500),
				tap(this.falseImg),
				delay(500),
				tap((_) => {
					this.curMovie = this.movies[mod(++this.offset, this.movies.length)];
				})
			)
			.subscribe();
	}

	ngOnInit(): void {
		this.asyncContent.subscribe((movies) => {
			this.movies = movies;
			this.curMovie = this.movies[0];
		});
		// this.asyncContent
		// 	.pipe(
		// 		switchMap((m) => m),
		// 		filter(({ backdrop: bd }) => !!bd),
		// 		tap((movie) => this.movies.push(movie))
		// 		// mergeMap((movie) =>
		// 		// 	this.imgCache
		// 		// 		.getImage(new BackdropPipe().transform(movie.backdrop, 3))
		// 		// 		.pipe(map((_) => this.movies.push(movie)))
		// 		// )
		// 	)
		// 	.subscribe({
		// 		next: (_) => {
		// 			if (!this.curMovie) {
		// 				this.moviesReady.next(1);
		// 				console.log('ready');
		// 			} else {
		// 				console.log('not ready');
		// 			}
		// 		},
		// 		error: (err) => console.log(err),
		// 	});
	}
}
