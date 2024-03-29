import { Component } from '@angular/core';
import { MovieGroup } from 'src/app/shared/models/Types';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	groups: MovieGroup[] = ['now_playing', 'popular', 'top_rated', 'upcoming'];
	header: MovieGroup = 'trending';
	constructor() {}
}
