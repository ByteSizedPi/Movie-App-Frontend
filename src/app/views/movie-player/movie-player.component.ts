import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WebtorrentService } from 'src/app/shared/services/webtorrent.service';
import { Movie } from 'src/app/shared/types/Movie';

@Component({
	selector: 'app-movie-player',
	templateUrl: './movie-player.component.html',
	styleUrls: ['./movie-player.component.scss'],
})
export class MoviePlayerComponent implements OnInit {
	public movieStream: Observable<string> | undefined;
	movie: Movie;

	constructor(public torrentService: WebtorrentService) {}

	ngOnInit(): void {
		this.movie = this.torrentService.movie;
		this.movieStream = this.torrentService.stream();
	}
}
