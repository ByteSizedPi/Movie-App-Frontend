import { Directive, HostListener, Input } from '@angular/core';
import { MovieModalService } from 'src/app/shared/components/movie-modal/movie-modal.service';

@Directive({
	selector: '[viewMovie]',
})
export class ViewMovieDirective {
	// @Input() viewMovie: Movie;
	@Input() viewMovie: number;

	constructor(private modalService: MovieModalService) {}

	@HostListener('click') onClick = () => this.modalService.open(this.viewMovie);
}
