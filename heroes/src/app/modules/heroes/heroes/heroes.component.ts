import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../models/hero';
import { HttpClient } from '@angular/common/http';
import { HeroService } from '../../../services/hero.service';
import { Observable } from 'rxjs/Observable';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'DHS-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
heroes$: Observable<Hero[]>;
selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes$ = this.heroService.getHeros();

  }

 onSelect(hero: Hero): void {
   this.selectedHero = hero;
  }
}
