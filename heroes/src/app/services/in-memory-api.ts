import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Hero } from '../models/hero';

export class InMemoryApi implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', alterEgo: '', specialPower: 'specialPower' ,
       addresses : [{line1: 'asd', state: 'xyz'}, {line1: 'asds', state: 'xyzs'}]},
      { id: 12, name: 'Narco', alterEgo: 'er', specialPower: 'specialPower' ,
      addresses : [{line1: 'asd2', state: 'xyz'}]},
      { id: 13, name: 'Bombasto', alterEgo: 'er', specialPower: 'specialPower'  ,
      addresses : []},
      { id: 14, name: 'Celeritas', alterEgo: 'er', specialPower: 'specialPower' ,
      addresses : [{line1: 'asd4', state: 'xyz'}, {line1: 'asds', state: 'xyzs'}]},
      { id: 15, name: 'Magneta' , alterEgo: 'er', specialPower: 'specialPower' ,
      addresses : [{line1: 'asd5', state: 'xyz'}, {line1: 'asds', state: 'xyzs'}]},
      { id: 16, name: 'RubberMan' , alterEgo: 'er', specialPower: 'specialPower' ,
      addresses : [{line1: 'asd6', state: 'xyz'}, {line1: 'asds', state: 'xyzs'}]},
      { id: 17, name: 'Dynama' , alterEgo: 'er', specialPower: 'specialPower' ,
      addresses : [{line1: 'asd7', state: 'xyz'}, {line1: 'asds', state: 'xyzs'}]},
      { id: 18, name: 'Dr IQ', alterEgo: 'er', specialPower: 'specialPower'  ,
      addresses : [{line1: 'asd8', state: 'xyz'}, {line1: 'asds', state: 'xyzs'}]},
      { id: 19, name: 'Magma' , alterEgo: 'er', specialPower: 'specialPower' ,
      addresses : [{line1: 'asd9', state: 'xyz'}, {line1: 'asds', state: 'xyzs'}]},
      { id: 20, name: 'Tornado', alterEgo: 'er', specialPower: 'specialPower'  }
    ];
    return { 'heroes': heroes };
  }

}
