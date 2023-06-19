import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UserAuthGuard  {
	constructor(private http: HttpClient, private router: Router) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> {
		return this.http
			.get<boolean>('http://localhost:3000/auth', {
				withCredentials: true,
			})
			.pipe(
				map((canNav) => {
					if (!canNav) {
						this.router.navigate(['/login']);
						return false;
					} else {
						return true;
					}
				})
			);
	}
}
