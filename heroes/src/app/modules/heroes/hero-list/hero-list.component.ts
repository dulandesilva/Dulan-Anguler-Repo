import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
import { Hero } from '../../../models/hero';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'DHS-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  @Input() heroes: Hero[];
  @Output() selectedHero = new EventEmitter<Hero>();

  constructor(private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  onSelect(hero: Hero) {
   // this.selectedHero.emit(hero);
   console.log(this.router);
  this.router.navigate( ['h/' + hero.id], {relativeTo: this.activateRoute});
  }
}
