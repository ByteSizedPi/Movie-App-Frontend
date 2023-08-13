import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieModalService } from 'src/app/shared/components/movie-modal/movie-modal.service';
import { WebtorrentService } from 'src/app/shared/services/webtorrent.service';
import {
	LocalStorage,
	Session,
} from '../../core/services/local-storage.service';
import { Movie } from '../types/Movie';
@Directive({
	selector: '[streamMovie]',
})
export class StreamMovieDirective {
	@Input() streamMovie: Movie;

	constructor(
		private localStorage: LocalStorage,
		private modalService: MovieModalService,
		private torrentService: WebtorrentService,
		private router: Router
	) {}

	@HostListener('click') onClick = () => {
		const { backdrop, title, torrents } = this.streamMovie;
		const hash = torrents[0].hash;
		const movie: Session['movie'] = { backdrop, title, hash };
		this.modalService.close();
		this.localStorage.setItem('movie', movie);
		this.router.navigate(['/watch']);
	};
}
