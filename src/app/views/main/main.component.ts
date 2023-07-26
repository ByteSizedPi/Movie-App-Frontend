import { Component } from '@angular/core';
import { MovieModalService } from 'src/app/shared/components/movie-modal/movie-modal.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent {
	constructor(public modal: MovieModalService) {}
}
