import {ZLinkedList} from './ZLinkedList';
import * as _ from 'lodash';

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

    modify(key: number, value: T): Boolean {
      const node = this.find(key);
      if (node) {
        node.value = value;
        return true;
      } else {
        return false;
      }
    }

    find(key: number): ZHashMapNode<T> {
      const set = this.head[this.hash(key)];
      for (const node of set) {
        if (_.isEqual(node.data.key, key)) {
          return node.data;
        }
      }
      return null;
    }

    delete(key: number): Boolean {
      const set = this.head[this.hash(key)];
      for (const node of set) {
        if (_.isEqual(node.data.key, key)) {
          set.remove(node);
          return true;
        }
      }
      return false;
    }

    * [Symbol.iterator]() {
      for (const set in this.head) {
        if (this.head.hasOwnProperty(set)) {
          for (const node of set) {
            yield node;
          }
        }
      };
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
