"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
function sort(array) {
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
exports.sort = sort;
;
//# sourceMappingURL=selection.js.map