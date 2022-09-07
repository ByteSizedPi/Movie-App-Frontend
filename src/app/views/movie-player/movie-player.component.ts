import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { WebtorrentService } from "src/app/shared/services/webtorrent.service";

@Component({
	selector: "app-movie-player",
	templateUrl: "./movie-player.component.html",
	styleUrls: ["./movie-player.component.scss"],
})
export class MoviePlayerComponent implements OnInit {
	public movieStream: Observable<string>;

	constructor(public torrentService: WebtorrentService) {}

	ngOnInit(): void {
		this.movieStream = this.torrentService.stream();
	}
}
