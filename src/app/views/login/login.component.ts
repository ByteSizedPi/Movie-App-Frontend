import { Component, OnInit } from "@angular/core";
import {
	AbstractControl,
	FormControl,
	FormGroup,
	ValidationErrors,
	Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { MoviesService } from "src/app/shared/services/movies.service";
import { UserService } from "src/app/shared/services/user.service";
import { Scroller } from "src/app/shared/models/Types";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
	private username: AbstractControl | null;
	private password: AbstractControl | null;
	public loginForm: FormGroup;

	public usernameFocussed = false;
	public passwordErr = "";

	public submitPending = false;

	constructor(
		private router: Router,
		private user: UserService,
		private movies: MoviesService
	) {}

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			username: new FormControl(
				null,
				Validators.required
				// this.verifyUsername.bind(this)
			),
			password: new FormControl(null, Validators.required),
		});
		this.username = this.loginForm.get("username");
		this.password = this.loginForm.get("password");
	}

	verifyUsername = (control: AbstractControl) =>
		new Promise<ValidationErrors | null>((resolve) =>
			this.user
				.verifyUsername(control.value)
				.subscribe((res: any) => resolve(res.userExists ? null : { err: "" }))
		);

	usernameIsLoading() {
		return this.loginForm.get("username")?.pending && !this.usernameFocussed;
	}

	usernameError() {
		let err =
			!this.usernameFocussed &&
			!this.username?.pending &&
			this.username?.touched &&
			this.username?.invalid &&
			this.username?.value;
		return err ? "user does not exist" : null;
	}

	passwordError(message: string) {
		this.passwordErr = message;
	}

	onSubmit() {
		this.router.navigate(["/home"]);
		// this.submitPending = true;
		// const body = {
		//   username: this.username?.value,
		//   password: this.password?.value,
		// };
		// this.user.verifyUser(body).subscribe((res: any) => {
		//   this.router.navigate(["/home"]);
		// this.submitPending = false;
		//   this.passwordErr = "incorrect password";
		// });
	}

	search = () => this.movies.searchMovies("shrek");

	asScroller(i: number): Scroller {
		return {
			id: `list-scroller-${i}`,
			aspect: !(i % 2) ? 3 / 2 : 9 / 16,
			movies: this.movies.searchMovies("shrek"),
		};
	}
}
