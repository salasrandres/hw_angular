import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  public get(){
    return this.http.get<Hero[]>('./assets/heroes.json');
  }
}

interface Hero {
  name: string,
  age: number,
  secretIdentity: string,
  powers: string[]
}
