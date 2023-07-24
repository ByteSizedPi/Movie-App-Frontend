import { Movie } from './Movie';

export type DefaultUser = {
	username: string;
	password: string;
	email: string;
	firstName: string;
	lastName: string;
};
export type User = DefaultUser & {
	registerDate: string;
	shows_list: Movie[];
};
