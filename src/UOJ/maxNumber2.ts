// 需要树形结构
// 一组数字组合成一个最大数字
// 数组倍增建树

export function maxNumber2(numbers: Array<number>): number {
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

    if (nextA === '') {
      return a;
    } else if (nextB === '') {
      return b;
    } else {
      return Number( strA.slice(0, 1) + max(Number(nextA), Number(nextB)));
    }
  }
}
