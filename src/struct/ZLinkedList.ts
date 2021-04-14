import * as _ from 'lodash';

export class ZLinkedList<T> {
    head: ZNode<T>;
    tail: ZNode<T>;

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
     * @param {void | ZNode} pos    // anchor
     */
    add(data: T, pos: void | ZNode<T>) {
      const node = new ZNode<T>();
      pos = pos || this.tail.pre;
      node.data = data;
      node.pre = pos;
      node.next = pos.next;
      pos.next.pre = node;
      pos.next = node;
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
      let node = this.head.next;
      while (node !== this.tail) {
        yield node;
        node = node.next;
      }
    }

    find(data: T): ZNode<T> {
      for (const node of this) {
        if (_.isEqual(node, data)) {
          return node;
        }
      }
      return null;
    }
};

/**
 * 链表元素
 */
export class ZNode<T> {
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
