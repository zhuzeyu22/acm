import {swap} from '@/utils/swap';
// 配对堆 弱类型，只有大小序，不定形式，多节点树
// e.g. 大根堆
export class ZPairingHeap {
    value: number;
    child: ZPairingHeap;
    brother: ZPairingHeap;
    pre: ZPairingHeap;

    constructor() {
    }

    public static merge(a: ZPairingHeap, b: ZPairingHeap): ZPairingHeap {
      if (!a) {
        return b;
      }
      if (!b) {
        return a;
      }
      if (a.value < b.value) {
        [a, b] = swap(a, b);
      }
      a.brother = null;
      b.brother = null;
      a.pre = null;
      b.pre = null;

      b.brother = a.child;
      b.brother.pre = b;

      a.child = b;
      a.child.pre = a;

      return a;
    }

    // 合并所有兄弟节点
    public static merges(x: ZPairingHeap): ZPairingHeap {
      if (!x || !x.brother) {
        return x;
      }

      const a = x.brother;
      const b = a.brother;
      x.pre = null;
      a.pre = null;
      x.brother = null;
      a.brother = null;

      return ZPairingHeap.merge(
          ZPairingHeap.merge(x, a),
          ZPairingHeap.merges(b),
      );
    }

    // 删除顶点
    public static deleteTop(x: ZPairingHeap): ZPairingHeap {
      return ZPairingHeap.merges(x.child);
    }

    // 增大一个元素的值，和其父节点做 merge，也可以和根节点做 merge
    public static increase(root: ZPairingHeap, x: ZPairingHeap, value: number) {
      x.value = value;
      if (!x.pre) {
        return x;
      }
      if (x.pre.brother === x) {
        x.pre.brother = x.brother;
      } else {
        x.pre.child = x.brother;
      }
      x.brother.pre = x.pre;
      x.brother = null;
      x.pre = null;
      return ZPairingHeap.merge(root, x);
    }
}
