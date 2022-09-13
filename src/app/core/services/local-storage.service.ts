import { Injectable } from '@angular/core';

export type Session = {
  token: string;
  movieHash: string;
};

type SessionKey = keyof Session;
const keys: SessionKey[] = ['token', 'movieHash'];

@Injectable({
  providedIn: 'root',
})
export class LocalStorage {
  constructor() {}
  sessionExists = () => !!this.getItem('token');

  //get item from localStorage
  getItem = (key: keyof Session) => {
    let k = localStorage.getItem(key);
    return k ? JSON.parse(k) : false;
  };

  //get session values from localStorage
  getSession = (): Session => {
    return Object.assign(
      {},
      ...keys.map((key) => ({ [key]: this.getItem(key) }))
    );
  };

  //set Session values
  setSession = (session: Session) => {
    for (const [key, value] of Object.entries(session))
      localStorage.setItem(key, JSON.stringify(value));
  };

  setItem = (key: SessionKey, value: string) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  clearSession = () => keys.forEach((key) => localStorage.removeItem(key));
}
