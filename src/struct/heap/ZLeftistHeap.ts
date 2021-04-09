import {swap} from '@/utils/swap';

export class ZLeftistHeap {
    // dist 距离，节点到最近叶子节点的距离，叶子节点的 dist 为 0
    dist: number;
    father: ZLeftistHeap;
    left: ZLeftistHeap;
    right: ZLeftistHeap;
    value:number;

    constructor() {
      this.dist = 0;
      this.father = null;
      this.left = null;
      this.right = null;
    }

    public static merge(x: ZLeftistHeap, y: ZLeftistHeap): ZLeftistHeap {
      if (!x || !y) {
        return x || y;
      }
      if (x.value < y.value) {
        [x, y] = swap(x, y);
      }
    }
}
