import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../../models/hero';
import { HeroService } from '../../../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'DHS-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
selectedHero: Hero;
  constructor(private route: ActivatedRoute, private heroService: HeroService) { }

  ngOnInit() {
    this.route.params.map(param => param.id)
    .switchMap(id => this.heroService.getHero(id))
    .subscribe(hero => this.selectedHero = hero);
  }

}
