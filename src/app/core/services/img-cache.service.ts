import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { TSMap } from 'typescript-map';
import { LocalStorage } from './local-storage.service';

export type CachedImages = TSMap<string, Blob>;

@Injectable({
	providedIn: 'root',
})
export class ImgCacheService {
	private _cache: CachedImages = new TSMap();

	constructor(private http: HttpClient, private localStorage: LocalStorage) {
		// fetch(
		// 	'https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg',
		// 	{ mode: 'no-cors' }
		// ).then((_) => {
		// 	console.log(_);
		// });
		// this.http
		// 	.get(
		// 		'https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg',
		// 		{ withCredentials: true }
		// 	)
		// 	.subscribe((_) => console.log('done'));
	}

	private push(url: string, blob: Blob) {
		if (this._cache.get(url)) return;
		this._cache.set(url, blob);
	}

	getImage(url: string): Observable<string> {
		if (this._cache.get(url))
			return of(URL.createObjectURL(this._cache.get(url)));

		return this.http.get(url, { responseType: 'blob' }).pipe(
			tap((blob) => this.push(url, blob)),
			map((blob) => URL.createObjectURL(blob))
		);
	}

	private pushSet = (set: string[]) =>
		set.forEach((url) => this.getImage(url).subscribe());
}
