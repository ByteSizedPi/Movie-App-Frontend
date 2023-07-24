import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieModalService } from 'src/app/shared/components/movie-modal/movie-modal.service';
import { WebtorrentService } from 'src/app/shared/services/webtorrent.service';
import { Movie } from '../types/Movie';
@Directive({
	selector: '[streamMovie]',
})
export class StreamMovieDirective {
	@Input() streamMovie: Movie;

	constructor(
		private modalService: MovieModalService,
		private torrentService: WebtorrentService,
		private router: Router
	) {}

	@HostListener('click') onClick = () => {
		this.modalService.closeModal();
		this.torrentService.movie = this.streamMovie;
		this.router.navigate(['/watch']);
	};
}
