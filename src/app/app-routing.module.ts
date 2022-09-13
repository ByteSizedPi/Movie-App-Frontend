import { MoviePlayerComponent } from './views/movie-player/movie-player.component';
import { UserComponent } from './views/user/user.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { AuthGuardService } from './core/services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'user', canActivate: [AuthGuardService], component: UserComponent },
  { path: 'watch', component: MoviePlayerComponent },
  { path: 'player', component: MoviePlayerComponent },

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
