module.exports = class ZList<T> {
    private head:ZNode<T>;
    private tail:ZNode<T>;

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
    add(data:T) {
      const node = new ZNode<T>();
      node.data = data;
      node.pre = this.tail.pre;
      node.next = this.tail;
      this.tail.pre = node;
    }

    /**
     * remove
     * @param {*} node
     * @return {boolean} result
     */
    remove(node:ZNode<T>) {
      if (node.pre && node.next) {
        node.pre.next = node.next;
        node.next.pre = node.pre;
        return true;
      } else {
        return false;
      }
    }
};

/**
 * 链表元素
 */
class ZNode<T> {
     pre:ZNode<T>;
     next:ZNode<T>;
     data:T;

     /**
     * 链表元素
     */
     constructor() {
     }
}
