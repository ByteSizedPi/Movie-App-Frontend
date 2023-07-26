import { AfterContentInit, Component } from '@angular/core';
import { PosterPipe } from 'src/app/modules/image/poster.pipe';
import { Palette } from 'src/app/shared/models/Types';
import { darkenColor, getTextColor } from 'src/app/shared/services/Utils';
import { ColorsService } from '../../shared/services/colors.service';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.scss'],
})
export class TestComponent implements AfterContentInit {
	palette: Palette;
	pending: boolean = false;
	darkenColor = darkenColor;
	getTextColor = getTextColor;

	constructor(
		public movies: MoviesService,
		public colorsService: ColorsService
	) {}

	ngAfterContentInit() {
		const src = new PosterPipe().transform(
			'/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
			0
		);
		this.colorsService.getPalette(src).subscribe((palette) => {
			this.palette = palette;
			console.log(this.palette);
		});
	}

	getStyles = () => {
		return {
			backgroundColor: darkenColor(
				this.palette.vibrant,
				this.pending ? 0.5 : 1
			),
			color: this.palette.vibrant,
		};
	};

	borderTop() {
		return { borderTop: `5rem solid${this.palette.vibrant}` };
	}

	clickHandler() {
		this.pending = true;
		setTimeout(() => {
			this.pending = false;
		}, 2000);
	}
}
