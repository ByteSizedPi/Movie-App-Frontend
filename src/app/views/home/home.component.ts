import { Component } from "@angular/core";
import { MoviesService } from "src/app/shared/services/movies.service";
import { MovieGroup } from "src/app/shared/models/Types";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
	constructor(public moviesService: MoviesService) {}
	groups: MovieGroup[] = [
		MovieGroup.NowPlaying,
		MovieGroup.Popular,
		MovieGroup.TopRated,
		MovieGroup.Upcoming,
	];
	header = MovieGroup.Trending;
}
