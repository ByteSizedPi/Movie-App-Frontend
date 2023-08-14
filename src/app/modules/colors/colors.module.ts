import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DarkenColorPipe } from './darken-color.pipe';
import { TextColorPipe } from './text-color.pipe';

const exports = [TextColorPipe, DarkenColorPipe];

@NgModule({
	declarations: exports,
	imports: [CommonModule],
	exports,
})
export class ColorsModule {}
