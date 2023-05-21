import {
	GoogleLoginProvider,
	SocialAuthService,
	SocialUser,
} from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
	Observable,
	ReplaySubject,
	catchError,
	map,
	of,
	switchMap,
	take,
	timer,
} from 'rxjs';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { UserService } from '../../../shared/services/user.service';

// client info
const client_id =
	'729640305434-d1hh5dvo407o8qkrhgmnvmq9eiihgr22.apps.googleusercontent.com';
const client_secret = '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';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
	validPw: ReplaySubject<boolean> = new ReplaySubject<boolean>();
	imgLoaded = false;

	pendingLogin: boolean = false;

	loginForm!: FormGroup;
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
	user!: SocialUser;
	isLoggedin!: boolean;

	pwError: string = 'invalid password';

	constructor(
		public moviesService: MoviesService,
		private userService: UserService,
		private formBuilder: FormBuilder,
		private socialAuthService: SocialAuthService,
		public router: Router
	) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			username: this.username,
			password: this.password,
		});

		this.password.valueChanges.subscribe((value: string) => {
			this.validPw.subscribe((res) => {
				this.pwError = res ? 'invalid password' : 'wrong password';
			});
			this.validPw.next(true);
		});

		this.socialAuthService.authState.subscribe((user) => {
			this.user = user;
			this.isLoggedin = user != null;
			console.log(this.user);
		});
	}

	usernameValidator(
		control: AbstractControl
	): Observable<{ [key: string]: any } | null> {
		return timer(500).pipe(
			switchMap((_) => this.userService.verifyUsername(control.value)),
			map((res) => (res ? null : { usernameTaken: true }))
		);
	}

	passwordValidator(
		control: AbstractControl
	): Observable<{ [key: string]: any } | null> {
		return this.validPw.pipe(
			map((res) => (res ? null : { invalidPassword: true })),
			take(1)
		);
	}

	login(): void {
		this.pendingLogin = true;
		this.userService
			.login(this.username.value, this.password.value)
			.pipe(
				catchError((err) => of(false)),
				map((res) => !!res)
			)
			.subscribe((res) => {
				this.pendingLogin = false;
				if (res) {
					return this.router.navigate(['/browse']);
				} else {
					this.password.patchValue('');
					return this.validPw.next(false);
				}
			});
	}

	loginWithGoogle(): void {
		this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
		// console.log(user);
	}
}
