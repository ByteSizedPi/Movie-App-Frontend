import { Component, OnInit } from '@angular/core';
// import { WebtorrentService } from 'src/app/shared/services/webtorrent.service';
import { Observable, tap } from 'rxjs';
import {
	LocalStorage,
	Session,
} from '../../core/services/local-storage.service';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
	selector: 'app-movie-player',
	templateUrl: './movie-player.component.html',
	styleUrls: ['./movie-player.component.scss'],
})
export class MoviePlayerComponent implements OnInit {
	movieStream: Observable<string>;
	movie: Session['movie'];
	pending: boolean = true;

	constructor(
		private movies: MoviesService,
		private localStorage: LocalStorage
	) {}

	ngOnInit(): void {
		this.movie = this.localStorage.getItem('movie') as Session['movie'];
		this.movieStream = this.movies
			.getMovie(this.movie.hash)
			.pipe(tap((_) => (this.pending = false)));
	}
}
