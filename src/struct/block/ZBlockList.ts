import {ZLinkedList, ZNode} from '@/struct/ZLinkedList';

// 块状链表 动态新增块
export class ZBlockList<T> {
    list: ZLinkedList<Array<T>>

    // sqrt(n)
    sqt: number

    length: number

    constructor(n: number) {
      this.sqt = Math.sqrt(n);
      this.length = 0;
      this.list = new ZLinkedList<Array<T>>();
      this.list.add(new Array(this.sqt));
    }

    // 检查是否需要分裂
    check(node: ZNode<Array<T>>) {
      const nl = node.data.length;
      if (nl > this.sqt) {
        const data = node.data.splice(this.sqt, nl - this.sqt);
        this.list.add(data);
      }
    }

    // 随机插入, 大于当前长度添加到尾部
    insert(data: T, pos: number) {
      if (this.length++ < pos) {
        const block = this.list.tail.pre;
        block.data.push(data);
        this.check(block);
        return;
      }
      const iterator = this.list[Symbol.iterator]();
      let node = iterator.next().value;
      while (node && pos > node.data.length) {
        pos -= node.data.length;
        node = iterator.next().value;
      }
      if (node) {
        node.data.splice(pos, 0, data);
        this.check(node);
      }
    }

    find(pos: number): T {
      const iterator = this.list[Symbol.iterator]();
      let node = iterator.next().value;
      while (node && pos > node.data.length) {
        pos -= node.data.length;
        node = iterator.next().value;
      }
      if (node) {
        return node.data[pos];
      }
      return null;
    }
}
