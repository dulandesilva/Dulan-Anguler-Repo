import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../../../services/hero.service';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../../../models/hero';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'DHS-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {
hero: Hero;
powers = ['Power1', 'Power2' , 'specialPower'];


constructor(private route: ActivatedRoute, private heroService: HeroService, private router: Router) { }

  ngOnInit() {
    this.route.params
    .map(params => params.id)
    .switchMap(id => this.heroService.getHero(id))
    .subscribe(h => this.hero = h);
  }
  submitForm() {
    this.heroService.saveHero(this.hero)
    .subscribe(h => this.router.navigateByUrl('heroes'));
   // .subscribe(h => this.router.navigate(['../../../heroes'], {relativeTo: this.route}));
    // .subscribe(h => this.router.navigateByUrl('heroes'));

    // this.router.navigate( ['h/' + hero.id], {relativeTo: this.activateRoute});
    // .subscribe(this.router.navigateByUrl[(' ')] );
    // return true;
  }

}
