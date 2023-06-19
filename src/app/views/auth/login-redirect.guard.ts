import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LoginRedirectGuard  {
	constructor(private http: HttpClient, private router: Router) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> {
		return of(true);

		// return this.http
		// 	.get<boolean>('http://localhost:3000/auth', {
		// 		withCredentials: true,
		// 	})
		// 	.pipe(
		// 		tap((loggedIn) => {
		// 			console.log('loggedIn:', loggedIn);
		// 		}),
		// 		map((l) => !l)
		// 	);
	}
}
