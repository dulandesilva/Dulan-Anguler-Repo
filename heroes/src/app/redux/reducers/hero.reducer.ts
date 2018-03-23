import * as HeroActions from '../actions/hero.actions';
import { HeroState } from '../state/app.state';


type Action = HeroActions.All;
export function heroReducer(state= {} as HeroState, action: Action) {
  switch (action.type) {
    case HeroActions.HEROES_LOADED: {
      return Object.assign({}, state, {heroes: action.payload} );
    }
    case HeroActions.SELECT_HERO: {
        return Object.assign({}, state, {selectedHero: action.payload} );
    }
    default: return state;
  }
}
