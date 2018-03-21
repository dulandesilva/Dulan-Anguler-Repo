import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Hero } from '../models/hero';

export class InMemoryApi implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', alterEgo: '', specialPower: 'specialPower' },
      { id: 12, name: 'Narco', alterEgo: 'er', specialPower: 'specialPower' },
      { id: 13, name: 'Bombasto', alterEgo: 'er', specialPower: 'specialPower'  },
      { id: 14, name: 'Celeritas', alterEgo: 'er', specialPower: 'specialPower' },
      { id: 15, name: 'Magneta' , alterEgo: 'er', specialPower: 'specialPower' },
      { id: 16, name: 'RubberMan' , alterEgo: 'er', specialPower: 'specialPower' },
      { id: 17, name: 'Dynama' , alterEgo: 'er', specialPower: 'specialPower' },
      { id: 18, name: 'Dr IQ', alterEgo: 'er', specialPower: 'specialPower'  },
      { id: 19, name: 'Magma' , alterEgo: 'er', specialPower: 'specialPower' },
      { id: 20, name: 'Tornado', alterEgo: 'er', specialPower: 'specialPower'  }
    ];
    return { 'heroes': heroes };
  }

}
