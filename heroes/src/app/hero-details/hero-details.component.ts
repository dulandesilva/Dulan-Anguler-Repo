import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'DHS-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
@Input() selectedHero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
