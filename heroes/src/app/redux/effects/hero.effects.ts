import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { HeroService } from '../../services/hero.service';
import * as HeroAction from '../actions/hero.actions';
import 'rxjs/add/operator/mergeMap';
@Injectable()
export class HeroEffects {

  @Effect() LoadHeroes$: Observable<Action> = this.actions$.ofType(HeroAction.LOAD_HEROES)
  .mergeMap(action => {
   return  this.heroService.getHeros().map(heroes => new HeroAction.HeroesLoaded(heroes) ) ;
  });

  constructor( private heroService: HeroService, private actions$: Actions) {

  }
}
