// e.g. 升序排列
export function sort(array: Array<number>): Array<number> {
  if (array.length <= 1) {
    return array;
  }

  let index = 0;

  array.forEach((element, i, arr) => {
    if (element < arr[index]) {
      // min = element
      index = i;
    }
  });

  if (index !== 0) {
    array[0] ^= array[index];
    array[index] ^= array[0];
    array[0] ^= array[index];
  }

  return [].concat([array[0]], sort(array.slice(1)));
};

