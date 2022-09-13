import { EventEmitter, Injectable } from '@angular/core';
import { Id, BODY } from '../../services/Utils';
import { MoviesService } from '../../services/movies.service';
import Movie from '../../types/Movie';

@Injectable({
  providedIn: 'root',
})
export class MovieModalService {
  private curMovie: Movie;
  isOpen = false;
  colorLoaded = false;
  onChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private moviesService: MoviesService) {}

  get movie() {
    return { ...this.curMovie };
  }

  openModal = (movie: Movie) => {
    const open = () => {
      this.onChange.emit(true);
      this.curMovie = movie;
      this.isOpen = true;
      this.lockScroll();
    };

    if (this.isOpen) {
      this.closeModal();
      setTimeout(() => open(), 201);
    } else {
      open();
    }
  };

  closeModal = () => {
    if (!this.isOpen) return;
    Id('movie-modal').style.animation = 'slide-out .2s forwards';
    Id('backdrop').style.animation = 'fade-out .2s forwards';
    setTimeout(() => {
      this.isOpen = false;
      this.onChange.emit(false);
    }, 200);
    this.allowScroll();
  };

  lockScroll = () => (BODY.style.overflowY = 'hidden');
  allowScroll = () => (BODY.style.overflowY = 'auto');

  getRecommended = () =>
    this.moviesService.getRecommended(this.curMovie.tmdb_id);

  getSimilar = () => this.moviesService.getSimilar(this.curMovie.tmdb_id);
}
