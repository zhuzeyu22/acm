const selectionSort = require("./sort/selection");
const bubbleSort = require("./sort/bubble");
console.log('Hello World from your main file!');
const example = `0 1 1 0 1 0
1 0 0 1 1 1
0 0 1 0 0 1
1 0 0 1 0 1
0 1 1 1 0 0`;
let a = example.split('\n').map(item => item.split(' '));
console.log(a);
const array_1 = [1, 5, 4, 10, 2, 3, 7, 8, 9, 6];
console.log(selectionSort(array_1));
console.log(bubbleSort(array_1));
console.log('done.');
//# sourceMappingURL=index.js.map