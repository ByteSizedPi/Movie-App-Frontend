import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from './core/guards/user-auth.guard';
import { TestComponent } from './test/test/test.component';
import { AuthComponent } from './views/auth/auth.component';
import { LoginRedirectGuard } from './views/auth/login-redirect.guard';
import { RegisterComponent } from './views/auth/register/register.component';
import { SigninComponent } from './views/auth/signin/signin.component';
import { HomeComponent } from './views/home/home.component';
import { MainComponent } from './views/main/main.component';
import { MoviePlayerComponent } from './views/movie-player/movie-player.component';
import { UserComponent } from './views/user/user.component';

const routes: Routes = [
	{
		path: 'test',
		component: TestComponent,
	},
	{
		path: 'auth',
		component: AuthComponent,
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
	// {
	// 	path: 'login',
	// 	component: AuthComponent,
	// 	canActivate: [LoginRedirectGuard],
	// },
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
			{ path: '', redirectTo: '/auth/login', pathMatch: 'prefix' },
		],
	},
	{ path: '**', redirectTo: 'auth/login', pathMatch: 'full' },
];

@NgModule({
	// imports: [RouterModule.forRoot(routes, { useHash: true })],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
