import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { HeroService } from '../../services/hero.service';
import * as HeroAction from '../actions/hero.actions';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
@Injectable()
export class HeroEffects {

  @Effect() LoadHeroes$: Observable<Action> = this.actions$.ofType(HeroAction.LOAD_HEROES)
  .mergeMap(action => {
   return  this.heroService.getHeros().map(heroes => new HeroAction.HeroesLoaded(heroes) ) ;
  });

  @Effect({dispatch: false}) selectHero  = this.actions$.ofType(HeroAction.SELECT_HERO)
  .map(action => (action as HeroAction.SelectHero).payload)
  .map(hero =>
    // this.router.navigate(['h', hero.id], { relativeTo: this.route}));
    this.router.navigateByUrl('heroes/h/' + hero.id));


  constructor( private heroService: HeroService, private actions$: Actions, private router: Router) {

  }
}
