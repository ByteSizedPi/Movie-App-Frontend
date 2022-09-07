import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class WebtorrentService {
	// private BASE_URL = "http://127.0.0.1:4000/stream/";
	private BASE_URL = "https://moviestreamingapi.azurewebsites.net/stream/";
	private curHash: string = "C31BF8F4BAF346FEACC597682FCF4453F86480EE";
	private url = this.BASE_URL + "add/" + this.curHash;
	private otherUrl = this.BASE_URL + "stream/" + this.curHash;

	constructor(private http: HttpClient) {}

	stream = () =>
		this.http
			.get(this.url)
			.pipe(map((_) => this.BASE_URL + "stream/" + this.curHash));

	set hash(hash: string) {
		this.curHash = hash;
	}
}
