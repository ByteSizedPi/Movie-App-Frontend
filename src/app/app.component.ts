import { MovieModalService } from './shared/components/movie-modal/movie-modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Movie App';

  constructor(public modal: MovieModalService) {}

  ngOnInit(): void {}
}
