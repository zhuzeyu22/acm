// 最大数 需要注意其传递性 详细证明看相关文档
export function maxNumber(numbers: Array<number>): string {
  numbers.sort((x, y) => {
    return Number(String(y) + String(x)) -
        Number(String(x) + String(y));
  });
  if (numbers[0] === 0) {
    return '0';
  }
  return numbers.join('');
}

