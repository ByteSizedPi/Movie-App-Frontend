import { Palette } from 'src/app/shared/models/Types';
import { ColorsService } from '../../services/colors.service';
import { MovieModalService } from './movie-modal.service';
import { Component, OnInit } from '@angular/core';
import { darkenColor, getTextColor } from '../../services/Utils';
import { BackdropPipe } from 'src/app/shared/pipes/backdrop.pipe';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss'],
})
export class MovieModalComponent implements OnInit {
  trailerShown: boolean = false;
  listPending = false;
  isListed = false;

  curPalette: Palette;
  colorsLoaded = false;
  showMore = true;
  getTextColor = getTextColor;

  constructor(
    public modal: MovieModalService,
    public colors: ColorsService,
    public user: UserService
  ) {}

  ngOnInit(): void {
    this.colors
      .getPalette(new BackdropPipe().transform(this.modal.movie, 3))
      .subscribe((palette) => (this.curPalette = palette));

    this.user.getShowListIDs().subscribe((ids) => {
      this.isListed = ids.includes(this.modal.movie.imdb_id);
    });
  }

  getGenre() {
    const { lightVibrant, darkMuted } = this.curPalette;
    return {
      color: lightVibrant,
      backgroundColor: `${darkMuted}40`,
      border: `1px solid ${lightVibrant}`,
    };
  }

  toggleList() {
    this.listPending = true;
    this.user[this.isListed ? 'removeFromList' : 'addToList'](
      this.modal.movie
    ).subscribe((_) => {
      setTimeout(() => {
        this.listPending = false;
        this.isListed = !this.isListed;
      }, 500);
    });
  }

  toggleMore() {
    this.showMore = !this.showMore;
  }

  borderTop() {
    return { borderTop: `5rem solid${this.curPalette.vibrant}` };
  }

  getStyles = () => {
    return {
      backgroundColor: darkenColor(
        this.curPalette.vibrant,
        this.listPending ? 0.5 : 1
      ),
      color: this.curPalette.vibrant,
    };
  };

  getListIcon = () =>
    `assets/${this.isListed ? 'minus-' : 'plus-'}${this.getIconColor()}.svg`;

  getIconColor = () =>
    getTextColor(this.curPalette.vibrant) === '#fff' ? 'white' : 'black';
}
