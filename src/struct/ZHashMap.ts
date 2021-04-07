import {ZLinkedList} from './ZLinkedList';

export class ZHashMap<T> {
    private readonly head: Array<ZLinkedList<ZHashMapNode<T>>>;
    private length;
    private DEFAULT_MAX_HEAD_LENGTH = 100;

    /**
     *
     * @param { number } length
     */
    constructor(length: number) {
      this.length = length || this.DEFAULT_MAX_HEAD_LENGTH;
      this.head = new Array(length);
      this.head.forEach((head, index, arr) => {
        arr[index] = new ZLinkedList<ZHashMapNode<T>>();
      });
    }

    /**
     *
     * @param { number } key
     * @return { number } hashIndex
     */
    hash(key: number) {
      return key % length;
    }

    /**
     *
     * @param { ZHashMapNode } node
     */
    add(node: ZHashMapNode<T>) {
      const set = this.head[this.hash(node.key)];
      set.add(node);
    }

    modify(key: number, value: T) {
      const set = this.head[this.hash(key)];
      for (const entry of set) {
        if (entry.value.data.key === key) {
          entry.value.data.value = value;
        }
      }
    }


    find(key:number) {
      const set = this.head[this.hash(key)];
    //  for
    }

    delete(key: number) {

    }
};

class ZHashMapNode<T> {
    key: number;
    value: T;

    constructor(key: number, value: T) {
      this.key = key;
      this.value = value;
    }
}
