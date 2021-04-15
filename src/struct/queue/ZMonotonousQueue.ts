// 单调队列
// e.g. 从小到大

import {ZQueue} from '@/struct/queue/ZQueue';

export class ZMonotonousQueue<T> extends ZQueue<T> {
  site:Array<number>
  size:number
  index:number

  constructor(size:number) {
    super();
    this.index = 0;
    this.size = size;
    this.site = [];
  }

  pop() {
    this.site.pop();
    return this.queue.pop();
  }

  pushBack(x: T) {
    super.pushBack(x);
    this.index++;
    this.site.push(this.index);
  }

  popFront(): T {
    this.site.shift();
    return super.popFront();
  }

  insert(x:T) {
    let tail = this.queue.slice(-1);
    while ( tail[0] && x < tail[0]) {
      this.pop();
      tail = this.queue.slice(-1);
    }
    this.pushBack(x);
    const head = this.site[0];
    while (head && (this.index - head > this.size)) {
      this.popFront();
    }
  }
}
