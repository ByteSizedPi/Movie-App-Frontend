import { Component, OnInit } from '@angular/core';
import { skip } from 'rxjs';
import { ColorsService } from 'src/app/modules/colors/colors.service';
import { BackdropPipe } from 'src/app/modules/image/backdrop.pipe';
import { Palette } from 'src/app/shared/models/Types';
import { DOM } from '../../services/Utils';
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

	listPending = false;
	isListed = false;
	downloads: boolean[] = [];

	curPalette: Palette;
	showMore = true;

	constructor(
		public modal: MovieModalService,
		public colors: ColorsService,
		public user: UserService,
		public moviesService: MoviesService
	) {}

	ngOnInit(): void {
		const modalSub = this.modal.toggleSubject$
			.pipe(skip(1))
			.subscribe((movie) => {
				if (movie) {
					this.content = movie;
					if (this.content.torrents)
						this.downloads = this.content.torrents.map((_) => false);

					this.colors
						.getPalette(new BackdropPipe().transform(this.content.poster, 0))
						.subscribe((palette) => (this.curPalette = palette));

					this.user.getShowListIDs().subscribe((ids) => {
						this.isListed = ids.includes(this.content.imdb_id);
					});
				} else {
					DOM.Id('movieModal').style.animation = 'modal-out 0.2s forwards';
					DOM.Id('backdrop').style.animation = 'fade-out 0.2s forwards';

					modalSub.unsubscribe();
				}
			});
	}
	toggleList() {
		this.listPending = true;
		this.user[this.isListed ? 'removeFromList' : 'addToList'](
			this.content
		).subscribe((_) => {
			setTimeout(() => {
				this.listPending = false;
				this.isListed = !this.isListed;
			}, 1000);
		});
	}

	download(hash: string, i: number) {
		this.downloads[i] = true;
		this.moviesService.getMovie(hash).subscribe({
			next: (url) => {
				const downloadLink = document.createElement('a');
				downloadLink.href = url;
				downloadLink.download = 'yay';
				downloadLink.style.display = 'none';

				document.body.appendChild(downloadLink);
				downloadLink.click();

				URL.revokeObjectURL(url);
				document.body.removeChild(downloadLink);
				this.downloads[i] = false;
			},
			error: (err) => {
				this.downloads[i] = false;
			},
			complete: () => {},
		});
	}
}
