import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { LocalStorage } from 'src/app/core/services/local-storage.service';
import Movie from '../types/Movie';
import { DefaultUser } from '../types/User';

type UserShort = {
	username: string;
	userExists: boolean;
};

type Response = { message: string };

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private BASE_URL = 'http://localhost:3000/user/';
	private token: string;
	listRefreshed: EventEmitter<boolean> = new EventEmitter();
	private user = false;
	isRefreshing = false;

	private username = 'johan';

	constructor(private http: HttpClient, private localStorage: LocalStorage) {}

	httpGet = <T>(url: string, options = { withCredentials: true }) =>
		this.http.get<T>(this.BASE_URL + url, options);

	httpPost = <T>(
		url: string,
		body = {},
		options = { withCredentials: true }
	) => {
		return this.http.post<T>(this.BASE_URL + url, body, options);
	};

	httpDelete = <T>(url: string, options = { withCredentials: true }) =>
		this.http.delete<T>(this.BASE_URL + url, options);

	verifyUsername = (username: string) =>
		this.httpGet<{ username: string | null }>(
			`verifyUsername/${username}`
		).pipe(map((res) => !!res.username));

	login = (username: string, password: string) =>
		this.httpPost<{ token?: string }>('login', {
			username,
			password,
		});

	logout = () =>
		this.httpPost('logout').pipe(
			tap((res) => {
				console.log(res);
				document.cookie = '';
			})
		);

	register(body: DefaultUser) {
		return this.httpPost('register', body);
	}

	getShowList = () =>
		this.httpGet<{ list: Movie[] }>('list').pipe(map(({ list }) => list));

	addToList = (movie: Movie) =>
		this.httpPost('list', { show: movie }).pipe(tap(this.refreshList));

	getShowListIDs = () =>
		this.httpGet<{ list: string[] }>('listids').pipe(map(({ list }) => list));

	refreshList = () => this.listRefreshed.emit(true);

	removeFromList = ({ imdb_id }: Movie) =>
		this.httpDelete<Response>(`list/imdbid=${imdb_id}`).pipe(
			tap(this.refreshList)
		);

	userExists = () => this.user;
	// login = () => (this.user = true);
	// logout = () => (this.user = false);

	verifyUser = (body: { username: string; password: string }) =>
		this.http.post(this.BASE_URL, body).pipe(
			map((res: any) => {
				this.user = !res.error;
				this.username = body.username;
				return res;
			})
		);

	toggleListItem = (movie: Movie) => {
		// this.refreshList();

		return this.http.post(`${this.BASE_URL}list/${this.username}`, {
			imdb_id: movie.imdb_id,
		});
	};

	getListIDs = () =>
		this.http.get<string[]>(`${this.BASE_URL}list/${this.username}`);

	// getList = () =>
	// 	new Observable<Movie>((observer) =>
	// 		this.getListIDs().subscribe((ids) =>
	// 			this.movies.getList(ids).subscribe(
	// 				(movie) => observer.next(movie),
	// 				(err) => {},
	// 				() => observer.complete()
	// 			)
	// 		)
	// 	);
}
