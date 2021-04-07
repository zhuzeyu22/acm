import * as _ from 'lodash';

export class ZList<T> {
    private head: ZNode<T>;
    private tail: ZNode<T>;

    /**
     * 链表
     */
    constructor() {
      this.head = new ZNode<T>();
      this.tail = new ZNode<T>();
      this.head.next = this.tail;
      this.tail.pre = this.head;
    }

    /**
     * add
     * @param {*} data
     */
    add(data: T) {
      const node = new ZNode<T>();
      node.data = data;
      this.tail.pre.next = node;
      node.pre = this.tail.pre;
      node.next = this.tail;
      this.tail.pre = node;
    }

    /**
     * remove
     * @param {*} node
     * @return {boolean} result
     */
    remove(node: ZNode<T>) {
      if (node.pre && node.next) {
        node.pre.next = node.next;
        node.next.pre = node.pre;
        return true;
      } else {
        return false;
      }
    }

    * [Symbol.iterator]() {
      let value = this.head.next;
      while (value !== this.tail) {
        yield {
          done: false,
          value,
        };
        value = value.next;
      }
      yield {
        done: true,
        value: null,
      };
    }

    find(data: T):ZNode<T> {
      for (const node of this) {
        if (_.isEqual(node.value.data, data)) {
          return node.value;
        }
      }
      // let node = this.head;
      // while (node.next !== this.tail) {
      //   node = node.next;
      //   if (_.isEqual(node.data, data)) {
      //     return node;
      //   }
      // }
      return null;
    }
};

/**
 * 链表元素
 */
class ZNode<T> {
    pre: ZNode<T>;
    next: ZNode<T>;
    data: T;

    /**
     * 链表元素
     */
    constructor() {
      this.pre = null;
      this.next = null;
      this.data = null;
    }
}
