import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from './core/guards/user-auth.guard';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './views/main/main.component';
import { MoviePlayerComponent } from './views/movie-player/movie-player.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [UserAuthGuard] },
    {
        path: '',
        // pathMatch: 'full',
        component: MainComponent,
        children: [{ path: 'browse', component: HomeComponent }],
    },
    // { path: 'login', component: LoginComponent },
    // { path: 'user', canActivate: [AuthGuardService], component: UserComponent },
    // { path: 'user', component: UserComponent },
    { path: 'watch', component: MoviePlayerComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
    // { path: 'player', component: MoviePlayerComponent },

    // {
    //   path: 'main', canActivate: [AuthGuardService], component: MainComponent, children: [
    //     { path: 'self', component: SelfAppraisalComponent },
    //     { path: 'employee', component: EmployeeAppraisalComponent },
    //     { path: 'other', component: OtherComponent },
    //   ]
    // },
    // { path: 'new', canActivate: [AuthGuardService], component: AppraisalComponent },
    // { path: 'newEmployee', canActivate: [AuthGuardService], component: NewEmployeeComponent },
    // { path: 'newTemplate', canActivate: [AuthGuardService], component: NewTemplateComponent },
    // { path: 'appraisals', component: AppraisalListComponent },
];

@NgModule({
    // imports: [RouterModule.forRoot(routes, { useHash: true })],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
