import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap, map } from 'rxjs';
import { LocalStorage } from './local-storage.service';
import { TSMap } from 'typescript-map';
import { Timer } from '../../test/Timer';

export type CachedImages = TSMap<string, Blob>;

@Injectable({
  providedIn: 'root',
})
export class ImgCacheService {
  private _cache: CachedImages = new TSMap();

  constructor(private http: HttpClient, private localStorage: LocalStorage) {}

  push(url: string, blob: Blob) {
    if (this._cache.get(url)) return;
    this._cache.set(url, blob);
  }

  getImage(url: string): Observable<string> {
    if (this._cache.get(url))
      return of(URL.createObjectURL(this._cache.get(url) as Blob));

    return this.http.get(url, { responseType: 'blob' }).pipe(
      tap((blob) => this.push(url, blob)),
      map((blob) => URL.createObjectURL(blob))
    );
  }

  pushSet = (set: string[]) =>
    set.forEach((url) => this.getImage(url).subscribe());
}
