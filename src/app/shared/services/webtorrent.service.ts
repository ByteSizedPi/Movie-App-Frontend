import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../types/Movie';

@Injectable({
	providedIn: 'root',
})
export class WebtorrentService {
	private readonly BASE_URL = 'http://127.0.0.1:3000/stream/';
	movie: Movie;
	constructor(private http: HttpClient) {}

	stream = (): Observable<string> | undefined => {
		if (!this.movie) return undefined;

		return of('10');

		// const { torrents } = this.movie;
		// const { hash } = torrents.find(
		// 	({ quality }) => quality === '1080p'
		// ) as Torrent;

		// return this.http
		// 	.get(this.BASE_URL + 'add/' + hash)
		// 	.pipe(map((_) => this.BASE_URL + hash));
	};
}
