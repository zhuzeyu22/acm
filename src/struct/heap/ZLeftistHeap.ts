import {swap} from '@/utils/swap';

// 左偏树
// 大根堆举例
export class ZLeftistHeap {
    // dist 距离，节点到最近叶子节点的距离，叶子节点的 dist 为 0
    dist: number;
    top: ZLeftistHeap;
    father: ZLeftistHeap;
    left: ZLeftistHeap;
    right: ZLeftistHeap;
    value: number;


    constructor() {
      this.dist = 0;
      this.top = this;
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

      x.right = ZLeftistHeap.merge(x.right, y);
      x.right.father = x;

      if (x.right.dist > x.left.dist) {
        [x.left, x.right] = swap(x.left, x.right);
      }

      x.dist = x.right.dist + 1;
      return x;
    }

    insert(x: ZLeftistHeap) {
      return ZLeftistHeap.merge(this, x);
    }

    public static findTop(x: ZLeftistHeap) {
      if (x !== x.top) {
        x.top = ZLeftistHeap.findTop(x.top);
      }
      return x.top;
    }

    public static update(x: ZLeftistHeap) {
      if (!x) {
        return;
      }
      if (x.dist !== x.right.dist + 1) {
        x.dist = x.right.dist + 1;
        ZLeftistHeap.update(x.father);
      }
    }


    delete(x: ZLeftistHeap) {
      const merge = ZLeftistHeap.merge(x.left, x.left);
      merge.father = x.father;
      if (x.father) {
        if (x.father.left === x) {
          x.father.left = merge;
        } else {
          x.father.right = merge;
        }
      }
      ZLeftistHeap.update(merge);
    }
}
