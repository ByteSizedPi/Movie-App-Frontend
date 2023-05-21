import {
	AfterViewInit,
	Component,
	ElementRef,
	EventEmitter,
	Input,
	Output,
	ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'cust-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
})
export class InputComponent implements AfterViewInit {
	@ViewChild('input') input!: ElementRef<HTMLInputElement>;
	@ViewChild('btnImg') btnImg!: ElementRef<HTMLImageElement>;
	@Input() control: FormControl;
	@Input() placeholder: string = '';
	@Input() spellcheck: boolean;
	@Input() type: 'text' | 'password' | 'email' | 'number' = 'text';
	@Input() errorMsg: string | undefined = undefined;

	@Output() focus: EventEmitter<void> = new EventEmitter<void>();
	@Output() blur: EventEmitter<void> = new EventEmitter<void>();

	public isFocused: boolean = false;

	constructor() {}

	ngAfterViewInit(): void {}

	_focus() {
		this.isFocused = true;
		this.focus.emit();
	}

	_blur() {
		this.isFocused = false;
		this.blur.emit();
	}

	showPwd() {
		this.btnImg.nativeElement.src = 'assets/eye-gray.svg';
		this.input.nativeElement.type = 'text';
	}

	hidePwd() {
		if (!this.btnImg.nativeElement) return;
		this.btnImg.nativeElement.src = 'assets/eye-off-gray.svg';
		this.input.nativeElement.type = 'password';
	}

	invalidInput(): boolean {
		return this.control.touched && !this.control.valid && !this.isFocused;
	}

	get errorMsgClass(): string {
		if (!this.errorMsg) return '';
		return this.invalidInput() ? 'msg-error' : '';
	}

	get errorMsgBorder(): string {
		return this.invalidInput() ? 'error-border' : '';
	}
}
