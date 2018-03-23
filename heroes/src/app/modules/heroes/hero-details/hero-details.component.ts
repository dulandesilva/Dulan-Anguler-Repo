import { Component, OnInit } from '@angular/core';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Store } from '@ngrx/store';
import { HeroState, AppState } from '../../../redux/state/app.state';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'DHS-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  selectedHero$ = this.store.select('heroState').select('selectedHero');
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

}
