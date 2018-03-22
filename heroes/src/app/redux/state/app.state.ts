import { Hero } from '../../models/hero';

export class AppState {
  heroState: HeroState;
}
export class HeroState {
  heroes: Hero[];
  selectedHero: Hero;

}
