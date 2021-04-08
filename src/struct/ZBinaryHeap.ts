// e.g. 大根堆
export class ZBinaryHeap {
    heap: Array<number>;

    constructor() {
      this.heap = new Array<number>(1);
    }

    swap(a: number, b: number) {
      this.heap[a] ^= this.heap[b];
      this.heap[b] ^= this.heap[a];
      this.heap[a] ^= this.heap[b];
    }

    up(x: number) {
      while (x > 1 && this.heap[x] < this.heap[x / 2]) { // 这里实例符号有问题
        this.swap(x, x / 2);
        x /= 2;
      }
    }

    down(x: number) {
      const n = this.heap.length;
      const h = this.heap;

      while (x * 2 < n) {
        let t = x * 2;
        if (t + 1 <= n && h[t + 1] > h[t]) {
          t++;
        }
        if (h[t] <= h[x]) break;
        this.swap(x, t);
        x = t;
      }
    }

    // 构建堆 (从根开始,逐个向上调整)
    buildHeap1() {
      for (let i = 1; i <= this.heap.length; i++) {
        this.up(i);
      }
    }

    modHigh1(x: number): number {
      let mod = 0;
      while ( x >>>= 1) {
        mod++;
      }
      return 1 << mod;
    }

    // 构建堆 (从叶子开始,逐个向下调整)
    buildHeap2() {
      for (let i = this.modHigh1(this.heap.length); i > 1; i--) {
        this.down(i);
      }
    }
}
