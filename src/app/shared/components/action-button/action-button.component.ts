import {
	AfterContentInit,
	Component,
	ElementRef,
	Input,
	ViewChild,
} from '@angular/core';
import { PosterPipe } from 'src/app/modules/image/poster.pipe';
import { Palette, PaletteColor } from '../../models/Types';
import { ColorsService } from '../../services/colors.service';

export type ButtonProps = {
	icon: string;
	color: PaletteColor;
	text: string;
};

export const PlayButtonProps: ButtonProps = {
	icon: 'fas fa-play',
	color: 'vibrant',
	text: 'Play',
};

export const InfoButtonProps: ButtonProps = {
	icon: 'fas fas-info',
	color: 'muted',
	text: 'Info',
};

@Component({
	selector: 'action-button',
	templateUrl: './action-button.component.html',
	styleUrls: ['./action-button.component.scss'],
})
export class ActionButtonComponent implements AfterContentInit {
	@ViewChild('btn') btn: ElementRef<HTMLButtonElement>;
	@Input({ required: true }) props: ButtonProps;
	@Input() htmlImg: HTMLImageElement;
	@Input() imgSrc: string;
	@Input() pending: boolean = false;
	palette: Palette;

	constructor(private colorsService: ColorsService) {}

	ngAfterContentInit() {
		const src = this.htmlImg
			? this.htmlImg.src
			: new PosterPipe().transform(this.imgSrc, 0);
		this.colorsService.getPalette(src).subscribe((palette) => {
			this.palette = palette;
			setTimeout(() => {
				this.btn.nativeElement.style.opacity = '1';
				this.btn.nativeElement.style.animation = 'none';
			}, 250);
		});
	}

	clickHandler() {
		this.pending = true;
		setTimeout(() => {
			this.pending = false;
		}, 2000);
	}
}
