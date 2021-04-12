export declare class ZLeftistHeap {
    dist: number;
    top: ZLeftistHeap;
    father: ZLeftistHeap;
    left: ZLeftistHeap;
    right: ZLeftistHeap;
    value: number;
    constructor();
    static merge(x: ZLeftistHeap, y: ZLeftistHeap): ZLeftistHeap;
    insert(x: ZLeftistHeap): ZLeftistHeap;
    findTop(): void;
    static update(x: ZLeftistHeap): void;
    delete(x: ZLeftistHeap): void;
}
