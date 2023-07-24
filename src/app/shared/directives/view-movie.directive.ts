import { Directive, HostListener, Input } from '@angular/core';
import { MovieModalService } from 'src/app/shared/components/movie-modal/movie-modal.service';
import { Movie } from '../types/Movie';

@Directive({
	selector: '[viewMovie]',
})
export class ViewMovieDirective {
	@Input() viewMovie: Movie;

	constructor(private modalService: MovieModalService) {}

	@HostListener('click') onClick = () =>
		this.modalService.openModal(this.viewMovie);
}
