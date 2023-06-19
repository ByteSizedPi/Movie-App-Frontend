import { Component, Input, OnInit } from '@angular/core';
import { PaletteColor } from '../../models/Types';

export type ButtonProps = {
	icon: string;
	color: PaletteColor;
	text: string;
};

export const PlayButtonProps: ButtonProps = {
	icon: 'fas fas-play',
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
export class ActionButtonComponent implements OnInit {
	@Input() props: ButtonProps;
	@Input() img: HTMLImageElement;

	constructor() {}

	ngOnInit(): void {}
}
