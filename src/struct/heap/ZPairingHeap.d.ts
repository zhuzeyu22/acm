export declare class ZPairingHeap {
    value: number;
    child: ZPairingHeap;
    brother: ZPairingHeap;
    pre: ZPairingHeap;
    constructor();
    static merge(a: ZPairingHeap, b: ZPairingHeap): ZPairingHeap;
    static merges(x: ZPairingHeap): ZPairingHeap;
    static deleteTop(x: ZPairingHeap): ZPairingHeap;
    static increase(root: ZPairingHeap, x: ZPairingHeap, value: number): ZPairingHeap;
}
