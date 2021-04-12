// 朴素思想 高位对比, 遇到公共子序列会有问题
export function maxNumber1(numbers: Array<number>): number {
  if (numbers.length === 0) {
    return null;
  }
  const ret: Array<number> = [];
  while (numbers.length > 0) {
    let m = numbers[0];
    numbers.forEach((n, i) => {
      if (i === 0) {
        return;
      }
      m = max(m, n);
    });
    const index = numbers.findIndex((n) => n === m);
    ret.push(m);
    numbers.splice(index, 1);
  }
  return Number(ret.join(''));
}


function max(a: number, b: number): number {
  if (!a || !b) {
    return a || b;
  }
  const strA = String(a);
  const strB = String(b);
  const diffA: number = Number(strA.slice(0, 1));
  const diffB: number = Number(strB.slice(0, 1));

  if (diffA > diffB) {
    return a;
  } else if (diffA < diffB) {
    return b;
  } else {
    const nextA = strA.slice(1);
    const nextB = strB.slice(1);

    if (nextA === '' && diffB) {
      return a;
    } else if (nextB === '') {
      return b;
    } else {
      return Number( strA.slice(0, 1) + max(Number(nextA), Number(nextB)));
    }
  }
}
