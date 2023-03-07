import { Ships } from './ships.js';

console.log('Hello world');

const ship1 = Ships(3);
console.log(ship1);

ship1.hit();
ship1.hit();
ship1.hit();

console.log(ship1);
console.log(ship1.sink);
