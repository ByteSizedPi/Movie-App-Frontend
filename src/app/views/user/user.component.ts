import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import Movie from 'src/app/shared/types/Movie';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    movies: Observable<Movie[]> | undefined;
    bg: Movie;

    constructor(public userService: UserService) {}

    ngOnInit(): void {
        // this.getShowList();
        // this.userService.listRefreshed.subscribe(this.getShowList);
        // this.userService.getShowList().subscribe((movies) => {
        //   if (!movies[0]) return;
        //   const index = Math.round(Math.random() * movies.length);
        //   this.bg = movies[index];
        // });
    }

    getShowList = () => {
        // this.movies = undefined;
        // setTimeout(() => (this.movies = this.userService.getShowList()), 0);
    };
}
