import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements AfterViewInit {
    @ViewChild('settings') settings: ElementRef;
    @ViewChild('dialog') dialog: ElementRef;
    showMenu: 'open' | 'closed' = 'closed';
    constructor() {}

    ngAfterViewInit(): void {
        this.settings.nativeElement.addEventListener('mouseenter', () => {
            this.showMenu = 'open';
        });
        this.settings.nativeElement.addEventListener('mouseleave', () => {
            this.showMenu = 'closed';
        });
    }
}
