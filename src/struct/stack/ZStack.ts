export class ZStack<T> {
    stack: Array<T>;
    top = -1;

    /**
     * 栈
     * @constructor
     * @param {number} length - 栈长度
     */
    constructor() {
      this.stack = [];
    };

    /**
     * 出栈
     * @return {*} 栈顶元素
     */
    pop(): T {
      if (this.top >= 0) {
        this.top--;
        return this.stack.pop();
      }
    }

    /**
     * 入栈
     * @param {*} item
     * @return {boolean} 操作成功返回 true
     */
    push(item: T) {
      this.stack.push(item);
      this.top++;
      return true;
    }
};
