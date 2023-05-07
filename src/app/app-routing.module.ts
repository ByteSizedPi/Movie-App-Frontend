import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from './core/guards/user-auth.guard';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MoviePlayerComponent } from './views/movie-player/movie-player.component';
import { UserComponent } from './views/user/user.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'browse', component: HomeComponent, canActivate: [UserAuthGuard] },
    { path: 'user', component: UserComponent, canActivate: [UserAuthGuard] },
    { path: 'watch', component: MoviePlayerComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
    // imports: [RouterModule.forRoot(routes, { useHash: true })],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
