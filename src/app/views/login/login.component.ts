import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MovieGroup } from 'src/app/shared/models/Types';
import { MoviesService } from 'src/app/shared/services/movies.service';

// client info
const client_id =
  '729640305434-d1hh5dvo407o8qkrhgmnvmq9eiihgr22.apps.googleusercontent.com';
const client_secret = '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';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  imgLoaded = false;
  header: MovieGroup = 'trending';

  loginForm!: FormGroup;
  username: FormControl;
  password: FormControl;
  user!: SocialUser;
  isLoggedin!: boolean;

  constructor(
    public moviesService: MoviesService,
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit() {
    this.username = new FormControl('', [Validators.required]);
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

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // console.log(user);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
}
