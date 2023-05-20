import {
    GoogleLoginProvider,
    SocialAuthService,
    SocialUser,
} from '@abacritt/angularx-social-login';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, map } from 'rxjs';
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
    @ViewChild('usernameInput') usernameInput!: ElementRef<HTMLInputElement>;
    usernameFocused = false;
    imgLoaded = false;
    invalidPassword: boolean = false;
    pendingLogin: boolean = false;

    loginForm!: FormGroup;
    username: FormControl;
    password: FormControl;
    user!: SocialUser;
    isLoggedin!: boolean;

    constructor(
        public moviesService: MoviesService,
        private userService: UserService,
        private formBuilder: FormBuilder,
        private socialAuthService: SocialAuthService,
        private router: Router
    ) {}

    ngOnInit() {
        this.username = new FormControl(
            '',
            [Validators.required],
            [this.usernameValidator.bind(this)]
        );

        this.password = new FormControl('', [Validators.required]);
        this.loginForm = this.formBuilder.group({
            username: this.username,
            password: this.password,
        });

        this.socialAuthService.authState.subscribe((user) => {
            this.user = user;
            this.isLoggedin = user != null;
            console.log(this.user);
        });
    }

    bgLoaded(): void {
        this.imgLoaded = true;
        setTimeout(() => {
            this.usernameInput.nativeElement.addEventListener(
                'focus',
                () => (this.usernameFocused = true)
            );
            this.usernameInput.nativeElement.addEventListener(
                'blur',
                () => (this.usernameFocused = false)
            );
        }, 0);

        this.password.valueChanges.subscribe(() => {
            this.invalidPassword = false;
        });
    }

    usernameValidator(
        control: AbstractControl
    ): Observable<{ [key: string]: any } | null> {
        return this.userService.verifyUsername(control.value).pipe(
            map((res) => {
                return res ? null : { usernameTaken: true };
            })
        );
    }

    validInput(): boolean {
        const invalidInput =
            this.username.invalid &&
            this.username.touched &&
            !this.usernameFocused;
        return !invalidInput;
    }

    login(): void {
        this.pendingLogin = true;
        this.userService
            .login(this.username.value, this.password.value)
            .pipe(
                catchError((err) => {
                    this.invalidPassword = true;
                    return 'error';
                })
            )
            .subscribe((res) => {
                this.pendingLogin = false;
                this.router.navigate(['/browse']);
            });
    }

    loginWithGoogle(): void {
        this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
        // console.log(user);
    }
}
