export declare class ZHashMap<T> {
    private head;
    private length;
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
    add(node: ZHashMapNode<any>): void;
}
declare class ZHashMapNode<T> {
    key: number;
    value: T;
    constructor(key: number, value: T);
}
export {};
