import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserAuthGuard implements CanActivate {
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
                catchError((err) => {
                    this.router.navigate(['/login']);
                    return of(false);
                }),
                map((res) => {
                    return true;
                })
            );
    }
}
