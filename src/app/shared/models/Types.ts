import { Observable } from 'rxjs';
import Movie from '../types/Movie';

// export enum MovieGroup {
//   NowPlaying = 'now_playing',
//   Popular = 'popular',
//   TopRated = 'top_rated',
//   Upcoming = 'upcoming',
//   Trending = 'trending',
// }

export type MovieGroup =
  | 'now_playing'
  | 'popular'
  | 'top_rated'
  | 'upcoming'
  | 'trending';

export type Resolution = 0 | 1 | 2 | 3;

export type Scroller = {
  id?: string;
  aspect?: number;
  movies: Observable<Movie[]>;
  showProgress?: boolean;
};

export type Palette = {
  vibrant: string;
  muted: string;
  lightVibrant: string;
  lightMuted: string;
  darkVibrant: string;
  darkMuted: string;
};

export type Torrent = {
  url: string;
  hash: string;
  quality: string;
  type: string;
  seeds: number;
  peers: number;
  size: string;
  size_bytes: number;
  date_uploaded: string;
  date_uploaded_unix: number;
};
