import { Observable } from 'rxjs';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MovieModalService } from 'src/app/shared/components/movie-modal/movie-modal.service';
import { constrain, For, EMPTYMOVIE } from 'src/app/shared/services/Utils';
import Movie from '../../types/Movie';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  movies: Movie[];
  offset = 0;
  itemsInARow = 0;
  padding = 8;
  canLeft = false;
  canRight = false;
  dataLoaded = false;

  @Input() title: string = '';
  @Input() asyncMovies: Observable<Movie[]>;
  @ViewChild('scroller') scroller: ElementRef;

  constructor(public modal: MovieModalService) {}

  ngOnInit(): void {
    this.asyncMovies.subscribe((movies) => {
      this.movies = movies;
      this.dataLoaded = true;
      this.translate();
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.movies = this.setTempCards();
      this.calcWidth();
    }, 0);
  }

  setTempCards = () => {
    let temp: Movie[] = [];
    For(() => temp.push(EMPTYMOVIE), 12);
    return temp;
  };

  translate(dir: number = 0) {
    if (!this.movies) return;

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
    var len = this.movies.length;
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
    width: `${this.calcWidth()}px`,
    height: `${this.calcWidth() * 1.5}px`,
  });

  canScroll() {
    this.canRight = this.offset < this.movies?.length - this.itemsInARow;
    this.canLeft = this.offset > 0;
  }
}
