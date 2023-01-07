import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Movie from '../types/Movie';
import { Torrent } from '../models/Types';

@Injectable({
  providedIn: 'root',
})
export class WebtorrentService {
  // private BASE_URL = 'https://moviestreamingapi.azurewebsites.net/stream/';
  private BASE_URL = 'http://127.0.0.1:3000/stream/';
  movie: Movie;
  constructor(private http: HttpClient) {}

  stream = (): Observable<string> | undefined => {
    if (!this.movie) return undefined;

    const { torrents } = this.movie;
    const { hash } = <Torrent>(
      torrents.find(({ quality }) => quality === '1080p')
    );

    return this.http
      .get(this.BASE_URL + 'add/' + hash)
      .pipe(map((_) => this.BASE_URL + 'stream/' + hash));
  };
}
