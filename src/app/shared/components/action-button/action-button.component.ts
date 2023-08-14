import {
	AfterContentInit,
	Component,
	ElementRef,
	EventEmitter,
	Input,
	Output,
	ViewChild,
} from '@angular/core';
import { ColorsService } from 'src/app/modules/colors/colors.service';
import { PosterPipe } from 'src/app/modules/image/poster.pipe';
import { Palette, PaletteColor } from '../../models/Types';

export type ButtonProps = {
	icon?: string;
	color: PaletteColor;
	text: string;
};

export const PlayButtonProps: ButtonProps = {
	icon: 'fas fa-play',
	color: 'vibrant',
	text: 'Play',
};

export const InfoButtonProps: ButtonProps = {
	icon: 'fas fa-info',
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
	@Output() clicked: EventEmitter<void> = new EventEmitter<void>();
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
}
