// const selectionSort = require('./selection');
// const bubbleSort = require('./bubble');
import * as selectionSort from './selection';
import * as bubbleSort from './bubble';

console.log('Hello World from your main file!');

const example = `0 1 1 0 1 0
  1 0 0 1 1 1
  0 0 1 0 0 1
  1 0 0 1 0 1
  0 1 1 1 0 0`;
const a = example.split('\n').map((item) => item.split(' '));
console.log(a);

const array = [1, 5, 4, 10, 2, 3, 7, 8, 9, 6];

console.log(selectionSort.sort(array));
console.log(bubbleSort.sort(array));
console.log('done.');
