import { Subscription } from 'rxjs';
import { MovieModalService } from '../movie-modal/movie-modal.service';
import { SearchService } from '../../services/search.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Id } from '../../services/Utils';
import { MoviesService } from '../../services/movies.service';
import Movie from '../../types/Movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  movies: Movie[] | undefined;
  itemsInARow: number = 0;
  gap: number = 4;
  movieSub: Subscription | undefined;
  loaded = false;

  constructor(
    public searchService: SearchService,
    private modal: MovieModalService,
    private moviesService: MoviesService
  ) {
    this.searchService.emitSearch.subscribe((obs) => {
      this.loaded = false;
      this.movies = undefined;
      this.movieSub?.unsubscribe();
      this.movieSub = obs.subscribe((movies) => {
        this.loaded = true;
        if (movies[0]) this.movies = movies;
        this.movieSub?.unsubscribe();
      });
    });
  }

  ngOnInit(): void {
    this.resize();
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
