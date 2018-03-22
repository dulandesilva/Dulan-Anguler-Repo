import { Action } from '@ngrx/store';
import { Hero } from '../../models/hero';
export const HEROES_LOADED =  '[Hero] Heroes Loaded';
export const LOAD_HEROES =  '[Hero] Load Heroes';

export class LoadHeroes implements Action {
 readonly type = LOAD_HEROES;
 constructor() {

 }

}
export class HeroesLoaded implements Action {
  readonly type = HEROES_LOADED;
  constructor(public payload: Hero []) {

  }
}

export type All = LoadHeroes | HeroesLoaded;
