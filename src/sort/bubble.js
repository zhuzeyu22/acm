export function sort(array) {
    if (array.length <= 1) {
        return array;
    }
    const length = array.length;
    array.forEach((element, i, arr) => {
        if (i < length - 1 && element > (arr === null || arr === void 0 ? void 0 : arr[i + 1])) {
            arr[i + 1] ^= arr[i];
            arr[i] ^= arr[i + 1];
            arr[i + 1] ^= arr[i];
        }
    });
    return [].concat(sort(array.slice(0, -1)), [array[length - 1]]);
}
;
//# sourceMappingURL=bubble.js.map