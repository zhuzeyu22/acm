import {ZList} from './list';

export class ZHashMap<T> {
  private head;
  private length;

  /**
   *
   * @param { number } length
   */
  constructor(length: number) {
    this.length = length;
    this.head = new Array(length);
    this.head.forEach((head, index, arr)=>{
      arr[index] = new ZList<T>();
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
  add(node: ZHashMapNode<any>) {

  }
};

class ZHashMapNode<T> {
  key;
  value;

  constructor(key: number, value :T) {
    this.key = key;
    this.value = value;
  }
}
