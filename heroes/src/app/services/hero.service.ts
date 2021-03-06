import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../models/hero';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
@Injectable()
export class HeroService {

  constructor(private http: HttpClient) { }

 // getHeros(): Observable<Hero[]> {
 //   return this.http.get<Hero[]>('/api/heroes');
 // }

 // getHero(id: number): Observable<Hero> {
 //   return this.http.get<Hero>('api/heroes/' + id);
 // }

 // saveHero(hero: Hero): Observable<Hero> {
 //   return this.http.put<Hero>('api/heroes/' + hero.id, hero);
 // }



  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(environment.api + 'heroes');
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(environment.api + 'heroes/' + id);
  }

  saveHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(environment.api + 'heroes/' + hero.id, hero);
  }
}
