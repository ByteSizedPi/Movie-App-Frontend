import { Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { Observable, map, switchMap, tap, timer } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	registerForm!: FormGroup;
	username: FormControl = new FormControl(
		'',
		[Validators.required],
		[this.usernameValidator.bind(this)]
	);
	password: FormControl = new FormControl(
		'',
		[Validators.required],
		[this.passwordValidator.bind(this)]
	);
	confirmPassword: FormControl = new FormControl('', [
		Validators.required,
		this.confirmPasswordValidator.bind(this),
	]);
	firstName: FormControl = new FormControl('', [Validators.required]);
	lastName: FormControl = new FormControl('', [Validators.required]);
	email: FormControl = new FormControl('', [
		Validators.required,
		Validators.email,
	]);

	usernameErr: string = 'invalid username';
	passwordErr: string = 'invalid password';
	confirmErr: string = 'passwords do not match';

	pendingSubmit = false;

	constructor(
		private userService: UserService,
		private formBuilder: FormBuilder
	) {
		this.registerForm = this.formBuilder.group({
			username: this.username,
			password: this.password,
			confirmPassword: this.confirmPassword,
			firstName: this.firstName,
			lastName: this.lastName,
			email: this.email,
		});
	}

	usernameValidator(
		control: AbstractControl
	): Observable<{ [key: string]: any } | null> {
		return timer(500).pipe(
			tap((rse) => {
				this.usernameErr =
					control.value === '' ? 'invalid username' : 'username taken';
			}),
			switchMap((_) => this.userService.verifyUsername(control.value)),
			map((res) => (res ? { usernameTaken: true } : null))
		);
	}

	passwordValidator(
		control: AbstractControl
	): Observable<{ [key: string]: any } | null> {
		this.confirmPassword.patchValue(this.confirmPassword.value);
		return timer(500).pipe(
			map((_) => {
				if (control.value === '') {
					this.passwordErr = 'invalid password';
					return { passwordInvalid: true };
				}
				if (control.value.length < 8) {
					this.passwordErr = 'password must have at least 8 characters';
					return { passwordInvalid: true };
				}
				if (!control.value.match(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/)) {
					this.passwordErr =
						'password must have at least one uppercase letter and one number';
					return { passwordInvalid: true };
				}
				return null;
			})
		);
	}

	confirmPasswordValidator(
		control: AbstractControl
	): { [key: string]: any } | null {
		return control.value !== this.password.value
			? { passwordMismatch: true }
			: null;
	}

	register(): void {
		this.pendingSubmit = true;
		this.userService
			.register({
				username: this.username.value,
				password: this.password.value,
				firstName: this.firstName.value,
				lastName: this.lastName.value,
				email: this.email.value,
			})
			.subscribe((res) => {
				this.pendingSubmit = false;
				console.log(res);
			});
	}

	ngOnInit(): void {}
}
