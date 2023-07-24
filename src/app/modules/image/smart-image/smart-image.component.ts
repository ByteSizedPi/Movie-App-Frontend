import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'smart-img',
	templateUrl: './smart-image.component.html',
	styleUrls: ['./smart-image.component.scss'],
})
export class SmartImageComponent {
	@Input() src: string;
	@Input() type: 'poster' | 'backdrop' = 'poster';
	@Input() resolution: number = 3;
	@Input() dims: { width: string; height: string };
	@Input() r: string = 'calc(var(--radius-s) + 2px)';

	@ViewChild('img') img: ElementRef<HTMLImageElement>;
}
