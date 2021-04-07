import {ZLinkedList} from '@/struct/ZLinkedList';
export class ZSetUnion<T> {
    private DEFAULT_MAX_LENGTH = 100;
    private set:Array<ZLinkedList<T>>;

    constructor(length: number) {
      length ||= this.DEFAULT_MAX_LENGTH;
      this.set = new Array<ZLinkedList<T>>(length).fill(new ZLinkedList<T>());
    }

    addSet() {
      this.set.push(new ZLinkedList<T>());
    }

    delSet(index:number) {
      this.set.splice(index, 1);
    }
}
