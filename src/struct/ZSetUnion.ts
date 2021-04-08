// import {ZLinkedList} from '@/struct/ZLinkedList';
// export class ZSetUnion<T> {
//     private DEFAULT_MAX_LENGTH = 100;
//     private set:Array<ZLinkedList<T>>;
//
//     constructor(length: number) {
//       length ||= this.DEFAULT_MAX_LENGTH;
//       this.set = new Array<ZLinkedList<T>>(length).fill(new ZLinkedList<T>());
//     }
//
//     addSet() {
//       this.set.push(new ZLinkedList<T>());
//     }
//
//     delSet(index:number) {
//       this.set.splice(index, 1);
//     }
// }

// 改用数组实现, node 省略
export class ZSetUnion {
    private DEFAULT_MAX_LENGTH = 100;
    private fa: Array<number>;
    private size: Array<number>;

    constructor(length: number) {
      length ||= this.DEFAULT_MAX_LENGTH;
      this.fa = new Array<number>(length);
      this.size = new Array<number>(length).fill(1); // 记录并初始化子树的大小为 1
    }

    // 普通查找
    // find(x: number): number {
    //   // 寻找x的祖先
    //   if (this.fa[x] == x) { // 如果x是祖先则返回
    //     return x;
    //   } else {
    //     return this.find(this.fa[x]);// 如果不是则x的爸爸问x的爷爷
    //   }
    // }

    // 路径压缩 (单次可能造成大量修改)
    find(x: number): number {
      if (x != this.fa[x]) { // x不是自身的父亲，即x不是该集合的代表
        this.fa[x] = this.find(this.fa[x]);
      } // 查找x的祖先直到找到代表,于是顺手路径压缩
      return this.fa[x];
    }

    // 合并
    // unionSet(x: number, y: number) {
    //   // x 与 y 所在家族合并
    //   x = this.find(x);
    //   y = this.find(y);
    //   this.fa[x] = y; // 把 x 的祖先变成 y 的祖先的儿子
    // }

    // 启发式合并
    unionSet(x: number, y: number) {
      let xx = this.find(x);
      let yy = this.find(y);
      if (xx == yy) return;
      if (this.size[xx] > this.size[yy]) { // 保证小的合到大的里
        // swap(xx, yy);
        xx ^= yy;
        yy ^= xx;
        xx ^= yy;
      }
      this.fa[xx] = yy;
      this.size[yy] += this.size[xx];
    }
}

