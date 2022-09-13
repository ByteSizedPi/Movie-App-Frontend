import { Subscription } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationEventsService {
  private navEvent: EventEmitter<boolean> = new EventEmitter();
  navEventCreated: boolean = false;

  constructor(private router: Router) {}

  init(params: {
    url: string;
    triggers: EventEmitter<boolean>[];
  }): EventEmitter<boolean> {
    if (this.navEventCreated) return this.navEvent;
    this.navEventCreated = true;

    params.triggers.forEach((sub) =>
      sub.subscribe((e) => this.navEvent.emit(!e))
    );

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart)
        this.navEvent.emit(event.url === params.url);
    });

    this.documentVisible();
    return this.navEvent;
  }

  documentVisible() {
    document.addEventListener('visibilitychange', () =>
      this.navEvent.emit(document.visibilityState === 'visible')
    );
  }
}
