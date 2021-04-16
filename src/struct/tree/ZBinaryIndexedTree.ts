export class ZBinaryIndexedTree {
    list: Array<number>
    indexTree: Array<number>

    constructor() {
      this.list = [];
      this.indexTree = [];
    }

    // 构造树 很巧妙
    build(list: Array<number>) {
      this.list = list;
      const length = this.list.length;
      this.indexTree = new Array<number>(length).fill(0);

      // 每个节点维护其父节点
      for (let i = 0; i < length; i++) {
        this.indexTree[i] += this.list[i];
        const j = i + this.lowbit(i);
        if (j < length) {
          this.indexTree[j] += this.indexTree[i];
        }
      }
    }

    // 用最低位 1的位置 标记其管理的数据数量
    // 0001 管理 1 数据
    // 0010 管理 2 数据
    // 0100 管理 4 数据
    // 1000 管理 8 数据

    lowbit(x: number) {
      return x & -x;
    }

    push(x: number) {
      // 注意顺序
      // 最后一个在 数组 中的索引
      const last = this.list.length;
      this.list.push(x);
      // 最后一个在 索引树 中的索引
      let index = this.lowbit(this.list.length);
      let sum = x;
      while (index > 0) {
        index >>>= 1;
        sum += this.list[last - index];
      }
      this.indexTree.push(sum);
    }

    update(x: number, index: number) {
      while (index <= this.list.length) {
        this.list[index] += x;
        index += this.lowbit(index);
      }
    }

    // first to n
    // n is index
    sum(n:number) {
      let sum = 0;
      while (n>0) {
        sum += this.indexTree[n];
        n = n - this.lowbit(n);
      }
      return sum;
    }

  // add
}
