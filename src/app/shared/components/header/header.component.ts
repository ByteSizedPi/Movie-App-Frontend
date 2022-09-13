import { Component, Input, OnInit } from '@angular/core';
import { MovieModalService } from 'src/app/shared/components/movie-modal/movie-modal.service';
import { getTextColor, mod } from 'src/app/shared/services/Utils';
import { Palette, MovieGroup } from 'src/app/shared/models/Types';
import { Router } from '@angular/router';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { BackdropPipe } from 'src/app/shared/pipes/backdrop.pipe';
import { NavigationEventsService } from 'src/app/core/services/navigation-events.service';
import { SearchService } from '../../services/search.service';
import { MoviesService } from '../../services/movies.service';
import Movie from '../../types/Movie';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() asyncMovies: Observable<Movie[]>;
  private offset = 0;
  private interval: any;
  private lockCount = 1;
  index = 0;
  movies: Movie[];
  colors: Palette[];
  colorsLoaded = false;
  showImg = true;

  constructor(
    public moviesService: MoviesService,
    public modalService: MovieModalService,
    private searchService: SearchService,
    public colorsService: ColorsService,
    private router: Router,
    private navEventService: NavigationEventsService
  ) {
    if (!this.navEventService.navEventCreated) {
      const params = {
        url: '/home',
        triggers: [this.modalService.onChange, this.searchService.onChange],
      };
      this.navEventService.init(params).subscribe((val) => {
        val ? this.startSlideShow() : this.pauseSlideShow();
      });
    }
  }

  ngOnInit(): void {
    this.asyncMovies.subscribe((movies) => {
      const pic = (m: Movie) =>
        this.colorsService.getPalette(new BackdropPipe().transform(m, 3));

      forkJoin(movies.map(pic)).subscribe((cols) => {
        this.movies = movies;
        this.colors = cols;
        this.startSlideShow();
      });
    });
  }

  startSlideShow() {
    if (--this.lockCount > 0) return;

    this.interval = setInterval(() => {
      this.showImg = this.colorsLoaded = false;
      setTimeout(() => {
        this.index = mod(++this.offset, this.movies.length);
        setTimeout(() => (this.showImg = true), 100);
      }, 400);
    }, 15000);
  }

  pauseSlideShow() {
    this.lockCount++;
    clearInterval(this.interval);
  }

  opacity = (arg: boolean) => ({ opacity: `${Number(arg)}` });

  getStyles = (kind: 'vibrant' | 'muted') => {
    let col = this.colors[this.index][kind];
    return {
      backgroundColor: col,
      color: getTextColor(col),
    };
  };
}
