const sort = require('@/sort/bubble');
module.exports = function sum3(array: Array<number>):Array<Array<number>> {
  const format = sort(array);
  // const length = format.length;
  // const offset = format[0];
  // const size = format[length-1] - format[0];
  // const buffer = new Array(size).fill(0);

  let i = 0;
  let j = 1;
  let k = 2;

  const ret:Array<Array<number>> = [];
  for ( ; i < format.length - 2; i++) {
    for (j = i + 1; j < format.length - 1; j++) {
      for (k = j + 1; k < format.length; k++ ) {
        const count = format[i] + format[j] + format[k];
        if (count === 0) {
          ret.push([format[i], format[j], format[k]]);
        }
      }
    }
  }

  return ret;
};

// function sum(a:number, b:number, c:number):number {
//   return a + b + c;
// }

