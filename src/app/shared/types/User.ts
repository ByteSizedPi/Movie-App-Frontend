import Movie from './Movie';
export type User = {
  username: string;
  password: string;
  email: string;
  registerDate: string;
  shows_list: Movie[];
};
