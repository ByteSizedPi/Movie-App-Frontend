import { Injectable } from "@angular/core";
import { Session } from "src/app/shared/types/Other";

type SessionKey = keyof Session;
const keys: SessionKey[] = ["token"];

@Injectable({
	providedIn: "root",
})
export class LocalStorage {
	constructor() {}
	static sessionExists = () => !!LocalStorage.getItem("token");

	//get item from localStorage
	static getItem = (key: keyof Session) => {
		let k = localStorage.getItem(key);
		return k ? JSON.parse(k) : false;
	};

	//get session values from localStorage
	static getSession = (): Session => {
		return Object.assign(
			{},
			...keys.map((key) => ({ [key]: LocalStorage.getItem(key) }))
		);
	};

	//set Session values
	static setSession = (session: Session) => {
		for (const [key, value] of Object.entries(session))
			localStorage.setItem(key, JSON.stringify(value));
	};

	static clearSession = () =>
		keys.forEach((key) => localStorage.removeItem(key));
}
