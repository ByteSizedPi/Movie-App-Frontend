import {
  combineLatest,
  filter,
  fromEvent,
  Observable,
  of,
  Subscription,
} from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { every, map, startWith, tap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NavigationEventsService {
  constructor(private router: Router) {}

  init(url: string, triggers: Observable<boolean>[] = []) {
    let visState = fromEvent(document, 'visibilitychange').pipe(
      map((_) => document.visibilityState === 'visible'),
      startWith(true)
    );

    let navEvent = this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map((event) => (<NavigationEnd>event).url === url)
    );

    return combineLatest([visState, navEvent, ...triggers]).pipe(
      map((events) => events.every((e) => e))
    );
  }
}
