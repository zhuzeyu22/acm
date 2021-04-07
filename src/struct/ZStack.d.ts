export declare class ZArray<T> {
    private DEFAULT_MAX_LENGTH;
    stack: Array<T>;
    top: number;
    private readonly max;
    /**
     * 栈
     * @constructor
     * @param {number} length - 栈长度
     */
    constructor(length: number);
    /**
     * 出栈
     * @return {*} 栈顶元素
     */
    pop(): T;
    /**
     * 入栈
     * @param {*} item
     * @return {boolean} 操作成功返回 true
     */
    push(item: T): boolean;
    find(): void;
}
