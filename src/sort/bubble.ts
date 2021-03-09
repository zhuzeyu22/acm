module.exports = function sort(array: Array<number>):Array<number> {
  if (array.length <= 1) {
    return array;
  }

  const length = array.length;

  array.forEach((element, i, arr) => {
    if (i < length - 1 && element > arr?.[i+1]) {
      arr[i+1] ^= arr[i];
      arr[i] ^= arr[i+1];
      arr[i+1] ^= arr[i];
    }
  });

  return [].concat(sort(array.slice(0, -1)), [array[length - 1]]);
};

