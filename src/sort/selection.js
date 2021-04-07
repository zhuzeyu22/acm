export function sort(array) {
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
}
;
//# sourceMappingURL=selection.js.map