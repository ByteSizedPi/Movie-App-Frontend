import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { LocalStorage } from 'src/app/core/services/local-storage.service';
import Movie from '../types/Movie';

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

    constructor(private http: HttpClient, private localStorage: LocalStorage) {
        const user = { username: 'JohanVenter' };
        const url = 'http://localhost:3000/login';
        // this.http.post<Session>(url, user).subscribe(this.localStorage.setSession);
    }

    getHeaders = () => ({
        headers: {
            Authorization: 'Bearer ' + this.localStorage.getItem('token'),
        },
    });

    httpGet = <T>(url: string, options = { withCredentials: true }) =>
        this.http.get<T>(this.BASE_URL + url, options);

    httpPost = <T>(
        url: string,
        body = {},
        options = { withCredentials: true }
    ) => {
        return this.http.post<T>(this.BASE_URL + url, body, options);
    };

    httpDelete = <T>(url: string) => this.http.delete<T>(this.BASE_URL + url);

    verifyUsername = (username: string) =>
        this.httpGet<{ username: string | null }>(
            `verifyUsername/${username}`
        ).pipe(map((res) => !!res.username));

    login = (username: string, password: string) =>
        this.httpPost<{ token?: string }>('login', {
            username,
            password,
        });

    test = () => this.httpGet('hello');

    getShowList = () => this.httpGet<Movie[]>('list');

    getShowListIDs = () => this.httpGet<string[]>('list_ids');

    refreshList = () => this.listRefreshed.emit(true);

    addToList = (movie: Movie) =>
        this.httpPost<Response>('list', { show: movie }).pipe(
            tap(this.refreshList)
        );

    removeFromList = ({ imdb_id }: Movie) =>
        this.httpDelete<Response>(`list/imdbid=${imdb_id}`).pipe(
            tap(this.refreshList)
        );

    userExists = () => this.user;
    // login = () => (this.user = true);
    logout = () => (this.user = false);

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
