import { Component } from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.scss'],
})
export class TestComponent {
	constructor(public movies: MoviesService) {}
}
