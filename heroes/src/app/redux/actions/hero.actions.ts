import { Action } from '@ngrx/store';
import { Hero } from '../../models/hero';
export const HEROES_LOADED =  '[Hero] Heroes Loaded';
export const LOAD_HEROES =  '[Hero] Load Heroes';
export const SELECT_HERO =  '[Hero] Select';
export const LOAD_HERO =  '[Hero] Load';
export const HERO_LODED =  '[Hero] Loaded';

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

export class SelectHero implements Action {
  readonly type = SELECT_HERO;
  constructor(public payload: Hero) {
  }
}

export class LoadHero implements Action {
  readonly type = LOAD_HERO;
  constructor(public id: number) {
  }
}
export class HeroLoded implements Action {
  readonly type = HERO_LODED;
  constructor(public id: number) {
  }
}
export type All = LoadHeroes | HeroesLoaded | SelectHero | LoadHero |HeroLoded;
