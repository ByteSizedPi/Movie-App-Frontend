import { Component, OnInit } from '@angular/core';
import { BackdropPipe } from 'src/app/modules/image/backdrop.pipe';
import { Palette } from 'src/app/shared/models/Types';
import { BODY, Id, darkenColor, getTextColor } from '../../services/Utils';
import { ColorsService } from '../../services/colors.service';
import { MoviesService } from '../../services/movies.service';
import { UserService } from '../../services/user.service';
import { Movie } from '../../types/Movie';
import { PlayButtonProps } from '../action-button/action-button.component';
import { MovieModalService } from './movie-modal.service';
@Component({
	selector: 'app-movie-modal',
	templateUrl: './movie-modal.component.html',
	styleUrls: ['./movie-modal.component.scss'],
})
export class MovieModalComponent implements OnInit {
	content: Movie;
	playButton = PlayButtonProps;
	bgImg: HTMLImageElement;

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
		public user: UserService,
		public moviesService: MoviesService
	) {}

	ngOnInit(): void {
		const openSub = this.modal.open$.subscribe((movie) => {
			this.content = movie;
			console.log(this.content);
			this.colors
				.getPalette(new BackdropPipe().transform(this.content.poster, 0))
				.subscribe((palette) => (this.curPalette = palette));

			// this.user.getShowListIDs().subscribe((ids) => {
			// 	this.isListed = ids.includes(this.content.imdb_id);
			// });
		});

		const closeSub = this.modal.close$.subscribe(() => {
			Id('movieModal').style.animation = 'modal-out 0.2s forwards';
			Id('backdrop').style.animation = 'fade-out 0.2s forwards';

			openSub.unsubscribe();
			closeSub.unsubscribe();
		});
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

	download(hash: string) {
		this.moviesService.downloadMovie(hash).subscribe((movieBlob) => {
			const file = new Blob([movieBlob], { type: 'video/mp4' });
			// return URL.createObjectURL(file);
			const fileURL = URL.createObjectURL(file);

			// Create a temporary anchor element to trigger the download
			const downloadLink = document.createElement('a');
			downloadLink.href = fileURL;
			downloadLink.download = 'yay'; // Use the provided filename
			downloadLink.style.display = 'none'; // Hide the anchor element

			// Trigger the download
			document.body.appendChild(downloadLink);
			downloadLink.click();

			// Clean up after the download is complete
			URL.revokeObjectURL(fileURL);
			document.body.removeChild(downloadLink);
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

	lockScroll = () => (BODY.style.overflowY = 'hidden');
	allowScroll = () => (BODY.style.overflowY = 'auto');

	getListIcon = () =>
		`assets/${this.isListed ? 'minus-' : 'plus-'}${this.getIconColor()}.svg`;

	getIconColor = () =>
		getTextColor(this.curPalette.vibrant) === '#fff' ? 'white' : 'black';
}
