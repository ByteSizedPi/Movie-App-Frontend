import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackdropPipe } from './backdrop.pipe';
import { CacheDirective } from './cache.directive';
import { PosterPipe } from './poster.pipe';
import { SmartImageComponent } from './smart-image/smart-image.component';

@NgModule({
	declarations: [SmartImageComponent, PosterPipe, BackdropPipe, CacheDirective],
	imports: [CommonModule],
	exports: [SmartImageComponent],
})
export class SmartImageModule {}
