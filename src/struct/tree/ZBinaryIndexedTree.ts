export class ZBinaryIndexedTree {
    list: Array<number>
    indexTree: Array<number>

    constructor() {
      this.list = [];
      this.indexTree = [];
    }

    // 用最低位 1的位置 标记其管理的数据数量
    // 0001 管理 1 数据
    // 0010 管理 2 数据
    // 0100 管理 4 数据
    // 1000 管理 8 数据

    lowbit(x: number) {
      return x & -x;
    }

    insert(x: number) {
      this.list.push(x);
    }

    update(x: number, index: number) {
      while (index <= this.list.length) {
        this.list[index] += x;
        index += this.lowbit(index);
      }
    }
}
