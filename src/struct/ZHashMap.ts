import {ZLinkedList} from './ZLinkedList';

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
      arr[index] = new ZLinkedList<T>();
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
    const hasNode = this.head[this.hash(node.key)].find(node);
    if (hasNode) {
      hasNode;
    }
  }

  modify() {

  }

  delete(key:number) {

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
