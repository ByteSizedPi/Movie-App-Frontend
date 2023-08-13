import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { MovieGroup } from 'src/app/shared/models/Types';
import { Movie, PartialMovie } from '../types/Movie';
import { UserService } from './user.service';

@Injectable({
	providedIn: 'root',
})
export class MoviesService {
	constructor(private userApi: UserService, private http: HttpClient) {
		// this.http
		// 	.get('https://yts.mx/api/v2/movie_details.jsonp?imdb_id=tt26674627')
		// 	.subscribe(console.log);
	}

	private BASE_URL = 'http://localhost:3000/movies/';

	private httpGet = <T>(query: string) =>
		this.http.get<T>(this.BASE_URL + query, {
			withCredentials: true,
		});

	searchMovies = (query: string) =>
		this.httpGet<PartialMovie[]>(`search=${query}`);

	getGroup = (group: MovieGroup) =>
		this.httpGet<PartialMovie[]>(`group=${group}`);

	getMovieByTMDBId = (tmdb_id: number) =>
		this.httpGet<Movie>(`tmdbid=${tmdb_id}`);

	getMovie = (hash: string) =>
		this.http
			.get(`${this.BASE_URL}stream=${hash}`, {
				responseType: 'blob',
				withCredentials: true,
			})
			.pipe(
				map((blob) => {
					const videoBlob = new Blob([blob], {
						type: 'video/mp4',
					});
					return URL.createObjectURL(videoBlob);
				})
			);

	getRecommended = (tmdb_id: number) =>
		this.httpGet<PartialMovie[]>(`recommended=${tmdb_id}`);

	getSimilar = (tmdb_id: number) =>
		this.httpGet<PartialMovie[]>(`similar=${tmdb_id}`);

	getShowList = () => this.userApi.getShowList();
}
