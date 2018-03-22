import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
import { Hero } from '../../../models/hero';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { HeroState, AppState } from '../../../redux/state/app.state';
import * as HeroActions from '../../../redux/actions/hero.actions';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'DHS-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes$ = this.store.select('heroState').select('heroes');

  constructor(private router: Router,
     private activateRoute: ActivatedRoute,
     private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new HeroActions.LoadHeroes());
  }
  onSelect(hero: Hero) {
   // this.selectedHero.emit(hero);
   console.log(this.router);
  this.router.navigate( ['h/' + hero.id], {relativeTo: this.activateRoute});
  }
}
