export declare class ZLinkedList<T> {
    private head;
    private tail;
    /**
     * 链表
     */
    constructor();
    /**
     * add
     * @param {*} data
     */
    add(data: T): void;
    /**
     * remove
     * @param {*} node
     * @return {boolean} result
     */
    remove(node: ZNode<T>): boolean;
    [Symbol.iterator](): Generator<ZNode<T>, void, unknown>;
    find(data: T): ZNode<T>;
}
/**
 * 链表元素
 */
declare class ZNode<T> {
    pre: ZNode<T>;
    next: ZNode<T>;
    data: T;
    /**
     * 链表元素
     */
    constructor();
}
export {};
