import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'generic-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements AfterViewInit {
    @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;
    logOutPending: boolean = false;

    constructor(private userService: UserService, private router: Router) {}

    ngAfterViewInit(): void {
        this.dialog.nativeElement.addEventListener('click', (event) => {
            if (event.target === this.dialog.nativeElement) {
                this.dialog.nativeElement.close();
            }
        });
    }

    @Input() open() {
        this.dialog.nativeElement.showModal();
    }

    @Input() close() {
        this.dialog.nativeElement.close();
    }

    logout() {
        this.logOutPending = true;
        this.userService.logout().subscribe((res) => {
            this.logOutPending = false;
            this.close();
            this.router.navigate(['/']);
        });
    }
}
