import { Component, OnInit } from '@angular/core';
import { MovieGroup } from 'src/app/shared/models/Types';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  header: MovieGroup = 'trending';
  constructor(public moviesService: MoviesService) {}
}
