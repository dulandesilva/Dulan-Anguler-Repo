import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'DHS-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  @Input() heroes: Hero[];
  @Output() selectedHero = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit() {
  }
  onSelect(hero: Hero) {
    this.selectedHero.emit(hero);
  }
}
