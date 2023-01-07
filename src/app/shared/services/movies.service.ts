import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import Movie from '../types/Movie';
import { MovieGroup } from 'src/app/shared/models/Types';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private userApi: UserService, private http: HttpClient) {}

  private BASE_URL = 'http://127.0.0.1:3000/movies/';

  private httpGet = (query: string) =>
    this.http.get<Movie[]>(this.BASE_URL + query);

  searchMovies = (query: string) => this.httpGet(`search=${query}`);

  getMovieGroup = (group: MovieGroup) => this.httpGet(`group=${group}`);

  getRecommended = (tmdb_id: number) => this.httpGet(`recommended=${tmdb_id}`);

  getSimilar = (tmdb_id: number) => this.httpGet(`similar=${tmdb_id}`);

  getShowList = () => this.userApi.getShowList();
}
