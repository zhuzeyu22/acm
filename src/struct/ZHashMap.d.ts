export declare class ZHashMap<T> {
    private readonly head;
    private length;
    private DEFAULT_MAX_HEAD_LENGTH;
    /**
     *
     * @param { number } length
     */
    constructor(length: number);
    /**
     *
     * @param { number } key
     * @return { number } hashIndex
     */
    hash(key: number): number;
    /**
     *
     * @param { ZHashMapNode } node
     */
    add(node: ZHashMapNode<T>): void;
    modify(key: number, value: T): Boolean;
    find(key: number): ZHashMapNode<T>;
    delete(key: number): Boolean;
    [Symbol.iterator](): Generator<string, void, unknown>;
}
declare class ZHashMapNode<T> {
    key: number;
    value: T;
    constructor(key: number, value: T);
}
export {};
