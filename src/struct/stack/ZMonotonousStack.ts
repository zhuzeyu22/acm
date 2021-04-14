// 单调栈
import {ZStack} from '@/struct/stack/ZStack';

export class ZMonotonousStack<T> extends ZStack<T> {
  // 数列举例
  constructor() {
    super();
  }

  insert(x:T) {
    while (this.stack.length > 0 && this.stack[this.top] < x) {
      this.pop();
    }
    this.push(x);
  }
}
