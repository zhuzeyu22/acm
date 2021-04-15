export class ZQueue<T> {
    queue:Array<T>
    constructor() {
      this.queue = [];
    }

    pushBack(x:T) {
      this.queue.push(x);
    }

    popFront() {
      return this.queue.shift();
    }
}
