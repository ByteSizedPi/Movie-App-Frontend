import {
	AfterViewInit,
	Component,
	ElementRef,
	Input,
	OnInit,
	ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModalService } from 'src/app/shared/components/movie-modal/movie-modal.service';
import { constrain } from 'src/app/shared/services/Utils';
import { Movie, PartialMovie } from '../../types/Movie';
@Component({
	selector: 'carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, AfterViewInit {
	movies: Movie[];
	content: PartialMovie[] | { poster: any; tmdb_id: any }[];
	offset = 0;
	itemsInARow = 0;
	padding = 8;
	canLeft = false;
	canRight = false;
	dataLoaded = false;

	@Input() title: string = '';
	@Input() asyncMovies: Observable<Movie[]>;
	@Input() asyncContent: Observable<PartialMovie[]>;
	@ViewChild('scroller') scroller: ElementRef;

	constructor(public modal: MovieModalService) {}

	ngOnInit(): void {
		if (this.asyncMovies) {
			this.asyncMovies.subscribe((movies) => {
				this.movies = movies;
				this.dataLoaded = true;
				this.translate();
			});
		} else if (this.asyncContent) {
			this.asyncContent.subscribe((content) => {
				this.content = content;
				this.dataLoaded = true;
				this.translate();
			});
		}
	}

	ngAfterViewInit(): void {
		setTimeout(() => {
			this.content = Array(12).fill({ poster_path: '', tmdb_id: undefined });
			this.calcWidth();
		}, 0);
	}

	translate(dir: number = 0) {
		if (!this.content) return;

		this.calcOffset(dir);

		this.scrollerEl().style.transition = dir === 0 ? 'none' : 'transform .5s';

		const newWidth = this.calcWidth();
		const translate = `translateX(${
			-this.offset * (newWidth + this.padding)
		}px)`;

		this.scrollerEl().style.transform = translate;

		this.canScroll();
	}

	calcOffset(dir: number = 0) {
		const newOffset = this.offset + dir * this.itemsInARow;
		var len = this.content.length;
		var max_offset = constrain(len - this.itemsInARow, 0, len);
		this.offset = constrain(newOffset, 0, max_offset);
	}

	calcWidth() {
		const max_width = 180;
		const contWidth = this.scrollerEl().clientWidth - this.calcMargins();

		this.itemsInARow = Math.ceil(contWidth / max_width);
		return contWidth / this.itemsInARow - this.padding;
	}

	calcMargins = () => 2 * document.documentElement.clientWidth * 0.04;

	scrollerEl = () => this.scroller.nativeElement;

	size = () => ({
		w: `${this.calcWidth()}px`,
		h: `${this.calcWidth() * 1.5}px`,
	});

	canScroll() {
		this.canRight = this.offset < this.content?.length - this.itemsInARow;
		this.canLeft = this.offset > 0;
	}

	validContent = () => !this.dataLoaded || !this.content || this.content[0];

	showModal = (tmdb_id: number) => this.modal.open(tmdb_id);
}
