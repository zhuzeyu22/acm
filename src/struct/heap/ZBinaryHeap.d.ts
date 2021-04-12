export declare class ZBinaryHeap {
    heap: Array<number>;
    constructor();
    up(x: number): void;
    down(x: number): void;
    buildHeap1(): void;
    modHigh1(x: number): number;
    buildHeap2(): void;
}
