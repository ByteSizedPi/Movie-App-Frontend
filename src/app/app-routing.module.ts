import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from './core/guards/user-auth.guard';
import { HomeComponent } from './views/home/home.component';
import { LoginRedirectGuard } from './views/login/login-redirect.guard';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/login/register/register.component';
import { SigninComponent } from './views/login/signin/signin.component';
import { MainComponent } from './views/main/main.component';
import { MoviePlayerComponent } from './views/movie-player/movie-player.component';
import { UserComponent } from './views/user/user.component';

const routes: Routes = [
	{
		path: 'auth',
		component: LoginComponent,
		canActivate: [LoginRedirectGuard],
		children: [
			{
				path: 'login',
				component: SigninComponent,
			},
			{
				path: 'register',
				component: RegisterComponent,
			},
			{ path: '', redirectTo: 'login', pathMatch: 'prefix' },
		],
	},
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [LoginRedirectGuard],
	},
	{
		path: '',
		component: MainComponent,
		children: [
			{
				path: 'browse',
				component: HomeComponent,
				canActivate: [UserAuthGuard],
			},
			{
				path: 'user',
				component: UserComponent,
				canActivate: [UserAuthGuard],
			},
			{ path: 'watch', component: MoviePlayerComponent },
			{ path: '', redirectTo: '/login', pathMatch: 'prefix' },
		],
	},
	{ path: '**', redirectTo: 'auth', pathMatch: 'full' },
];

@NgModule({
	// imports: [RouterModule.forRoot(routes, { useHash: true })],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
