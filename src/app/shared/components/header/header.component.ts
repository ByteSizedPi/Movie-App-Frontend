import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  forkJoin,
  from,
  fromEvent,
  interval,
  map,
  Observable,
  of,
  Subscription,
} from 'rxjs';
import {
  delay,
  filter,
  mergeMap,
  startWith,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { NavigationEventsService } from 'src/app/core/services/navigation-events.service';
import { MovieModalService } from 'src/app/shared/components/movie-modal/movie-modal.service';
import { Palette } from 'src/app/shared/models/Types';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { getTextColor, mod } from 'src/app/shared/services/Utils';
import { Timer } from 'src/app/test/Timer';
import { ImgCacheService } from '../../../core/services/img-cache.service';
import { BackdropPipe } from '../../pipes/backdrop.pipe';
import { MoviesService } from '../../services/movies.service';
import { SearchService } from '../../services/search.service';
import Movie from '../../types/Movie';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() asyncMovies: Observable<Movie[]>;
  @ViewChild('bg') bg: ElementRef<HTMLImageElement>;
  private offset = 0;
  index = 0;
  movies: Movie[] = [];
  colors: Palette[] = [];
  // colorsLoaded = false;
  showImg = true;
  showText = true;
  slideSub: Subscription;
  timer: Timer = new Timer();

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
    this.slideSub = interval(3_000)
      .pipe(
        withLatestFrom(canSlide),
        filter(([_, canSlide]) => this.movies[0] && canSlide),
        map(([_, canSlide]) => canSlide),
        tap((_) => (this.showImg = this.showText = false)),
        delay(300),
        switchMap((_) => {
          this.index = mod(++this.offset, this.movies.length);
          return fromEvent(this.bg.nativeElement, 'load');
        }),
        tap((_) => (this.showImg = true)),
        delay(300),
        tap((_) => (this.showText = true))
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.asyncMovies
      .pipe(
        switchMap((m) => m),
        filter(({ backdrop }) => !!backdrop),
        mergeMap((movie) =>
          this.imgCache
            .getImage(new BackdropPipe().transform(movie, 3))
            .pipe(map((_) => movie))
        ),
        tap((movie) => {
          this.colorsService
            .getPalette(new BackdropPipe().transform(movie, 0))
            .subscribe((cols) => {
              this.colors.push(cols);
            });
        })
      )
      .subscribe((movie) => {
        // console.log(movie);
        this.movies.push(movie);
        // const pic = (m: Movie) =>
        //   this.colorsService.getPalette(new BackdropPipe().transform(m, 0));
        // forkJoin(movies.map(pic)).subscribe((cols) => {
        //   this.colors = cols;
        // });
      });
    // this.asyncMovies.subscribe((movies) => {
    //   // const pic = (m: Movie) =>
    //   //   this.colorsService.getPalette(new BackdropPipe().transform(m, 0));
    //   // forkJoin(movies.map(pic)).subscribe((cols) => {
    //   //   this.movies = movies;
    //   //   this.colors = cols;
    //   // });
    //   this.movies = movies;
    // });
  }

  getStyles = (kind: 'vibrant' | 'muted') => {
    let col = this.colors[this.index][kind];
    return {
      backgroundColor: col,
      color: getTextColor(col),
    };
  };
}

('https://image.tmdb.org/t/p/original/mSyQoValhBsJdq3JNGXJww2Q5yL.jpg');
function takeOne(): import('rxjs').OperatorFunction<string, unknown> {
  throw new Error('Function not implemented.');
}
