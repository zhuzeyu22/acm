import * as _ from 'lodash';

export class ZStack<T> {
    private DEFAULT_MAX_LENGTH = 100;
    stack: Array<T>;
    top = 0;
    private readonly max: number;

    /**
     * 栈
     * @constructor
     * @param {number} length - 栈长度
     */
    constructor(length: number) {
      this.max = length || this.DEFAULT_MAX_LENGTH;
      this.stack = new Array<T>(length);
    };

    /**
     * 出栈
     * @return {*} 栈顶元素
     */
    pop() {
      if (this.top) {
        this.top--;
        return this.stack[this.top];
      }
    }

    /**
     * 入栈
     * @param {*} item
     * @return {boolean} 操作成功返回 true
     */
    push(item: T) {
      if (this.top < this.max) {
        this.stack[this.top] = item;
        this.top++;
        return true;
      } else {
        return false;
      }
    }
};
